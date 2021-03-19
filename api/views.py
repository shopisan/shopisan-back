import importlib

from django.contrib.auth.models import User, Group
from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response



from . import permissions as custom_permissions


@api_view(["GET"])
def get_url_names(request):
    from django.apps import apps

    list_of_url_names = [
        "http://127.0.0.1:8000/api/users/",
        "http://127.0.0.1:8000/api/files/",
        "http://127.0.0.1:8000/api/stores/",
        "http://127.0.0.1:8000/api/stores_geo/",
        "http://127.0.0.1:8000/api/posts/",
    ]

    return Response(list_of_url_names)


