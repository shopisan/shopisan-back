from django.contrib import admin
from django.contrib.admin.templatetags.admin_urls import add_preserved_filters
from django.http import HttpResponseRedirect
from django.template.defaultfilters import register
from django.urls import reverse
from emails import send_mail

from user.models import User, Profile
from .models import ContactTicket, StoreContactTicket
from .forms import StoreContactTicketForm


@register.inclusion_tag('admin/custom_submit_line.html', takes_context=True)
def custom_submit_row(context):
    opts = context['opts']
    change = context['change']
    is_popup = context['is_popup']
    save_as = context['save_as']
    processed = context['is_processed']
    ctx = {
        'opts': opts,
        'show_delete_link': (
            not is_popup and context['has_delete_permission'] and
            change and context.get('show_delete', True)
        ),
        'show_save_and_answer': not is_popup and context['has_change_permission'],
        'show_save_and_deny': not processed and not is_popup and context['has_change_permission'],
        'show_save_and_continue': not is_popup and context['has_change_permission'],
        'is_popup': is_popup,
        'show_save': not processed and not is_popup and context['has_change_permission'],
        'preserved_filters': context.get('preserved_filters'),
    }
    if context.get('original') is not None:
        ctx['original'] = context['original']
    return ctx


def accept_and_send_email(store_contact_ticket):
    user = User()
    user.is_owner = True
    user.email = store_contact_ticket.email
    user.password = store_contact_ticket.password
    user.username = store_contact_ticket.username
    user.save()

    profile = Profile()
    profile.name = store_contact_ticket.name
    profile.surname = store_contact_ticket.surname
    profile.user = user
    profile.save()

    store_contact_ticket.processed = True
    store_contact_ticket.save()

    send_mail(subject="Votre demande de compte propriétaire a été acceptée",
              recipient_list=[store_contact_ticket.email],
              template="emails/includes/store_owner_accepted.html")


class ContactAdmin(admin.ModelAdmin):
    list_display = ['subject', 'name', 'surname']


class StoreContactAdmin(admin.ModelAdmin):
    change_form_template = 'admin/custom_store_ticket_form.html'

    def change_view(self, request, object_id, form_url='', extra_context=None):
        extra_context = extra_context or {}
        instance = self.get_object(request, object_id)
        extra_context['is_processed'] = instance.processed
        return super().change_view(
            request, object_id, form_url, extra_context=extra_context,
        )

    form = StoreContactTicketForm
    list_filter = ('processed',)
    list_display = ['brand', 'name', 'surname', 'processed']
    fields = ('brand', ('name', 'surname'), ('email', 'phone'), 'message', 'answer')
    exclude = ('processed',)
    readonly_fields = ('brand', 'name', 'surname', 'email', 'phone', 'message')
    actions = ["accept"]

    def accept(self, request, queryset):
        for store_ticket in queryset:
            accept_and_send_email(store_ticket)

    accept.short_description = "Accepter le(s) postulant(s)"

    def response_change(self, request, obj):
        opts = self.model._meta
        pk_value = obj._get_pk_val()
        preserved_filters = self.get_preserved_filters(request)

        if "_save_deny" in request.POST:
            obj.processed = True
            obj.save()
        elif "_save_answer" in request.POST:
            answer = request.POST["answer"]
            if "" != answer.strip():
                send_mail(subject="Réponse à votre demande d'enregistrement", recipient_list=[obj.email],
                          template="emails/includes/common_email.html", variables={"body": answer})
        else:
            accept_and_send_email(obj)
        redirect_url = reverse('admin:%s_%s_change' %
                               (opts.app_label, opts.model_name),
                               args=(pk_value,),
                               current_app=self.admin_site.name)
        redirect_url = add_preserved_filters({'preserved_filters': preserved_filters, 'opts': opts}, redirect_url)
        return HttpResponseRedirect(redirect_url)
        # return super(MyModelAdmin, self).response_change(request, obj)


admin.site.register(ContactTicket, ContactAdmin)
admin.site.register(StoreContactTicket, StoreContactAdmin)
