from django.contrib import admin
from .models import ContactTicket, StoreContactTicket


class ContactAdmin(admin.ModelAdmin):
    list_display = ['subject', 'name', 'surname']


class StoreContactAdmin(admin.ModelAdmin):
    list_display = ['subject', 'name', 'surname']


admin.site.register(ContactTicket)
admin.site.register(StoreContactTicket)
