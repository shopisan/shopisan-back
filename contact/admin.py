from django.contrib import admin
from .models import ContactTicket, StoreContactTicket
from .forms import StoreContactTicketForm
from django.contrib.admin.options import forms


class ContactAdmin(admin.ModelAdmin):
    list_display = ['subject', 'name', 'surname']


class StoreContactAdmin(admin.ModelAdmin):
    form = StoreContactTicketForm
    list_filter = ('processed',)
    list_display = ['brand', 'name', 'surname', 'processed']
    fields = ('brand', ('name', 'surname'), ('email', 'phone'), 'message', 'answer')
    exclude = ('processed',)
    readonly_fields = ('brand', 'name', 'surname', 'email', 'phone', 'message')


admin.site.register(ContactTicket, ContactAdmin)
admin.site.register(StoreContactTicket, StoreContactAdmin)
