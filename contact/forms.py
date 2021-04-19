from django import forms
from .models import StoreContactTicket
from emails import send_mail


class StoreContactTicketForm(forms.ModelForm):
    answer = forms.CharField(widget=forms.Textarea(), required=False)

    # def save(self, commit=True):
    #     print(self)
    #     answer = self.cleaned_data.get('answer', None)
    #     print("answer: " + answer)
    #     instance = self.instance
    #     instance.processed = True
    #     # todo trouver comment garder les new lines dans le body de l'email
    #     # send_mail(subject="Réponse à votre demande d'enregistrement", recipient_list=[instance.email],
    #     #           template="emails/includes/common_email.html", variables={"body": answer})
    #     return super(StoreContactTicketForm, self).save(commit=commit)

    class Meta:
        model = StoreContactTicket
        fields = ('brand', 'name', 'surname', 'email', 'phone', 'message')

