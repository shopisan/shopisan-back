from django.shortcuts import render


def index(request, *args, **kwargs):
    return render(request, "emails/includes/" + kwargs['email_template'] + ".html")
