from django.shortcuts import render


def index(request, *args, **kwargs):
    return render(request, "web/index.html")
