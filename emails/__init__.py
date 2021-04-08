from django.core import mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags


def send_mail(subject, recipient_list, template='', from_email='"Shopisan" <info@jh8.dev>', variables=None):
    if variables is None:
        variables = {}

    variables['subject'] = subject

    html_message = render_to_string(template, variables)
    plain_message = strip_tags(html_message)

    mail.send_mail(subject=subject, from_email=from_email, recipient_list=recipient_list, message=plain_message,
                   html_message=html_message)
