from django import forms
from .models import StoreContactTicket, ContactTicket


class ContactTicketForm(forms.ModelForm):
    answer = forms.CharField(widget=forms.Textarea(), required=False)

    class Meta:
        model = ContactTicket
        fields = ('subject', 'name', 'surname', 'email', 'message')


class StoreContactTicketForm(forms.ModelForm):
    answer = forms.CharField(widget=forms.Textarea(), required=False)

    class Meta:
        model = StoreContactTicket
        fields = ('brand', 'name', 'surname', 'email', 'phone', 'message')

