from django.contrib.auth.models import AnonymousUser
from rest_framework import permissions

from .models import Post


class IsPostOwnerOrAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        request_user = request.user
        if request.method in permissions.SAFE_METHODS:
            return True
        if isinstance(request_user, AnonymousUser):
            return False
        return True

    def has_object_permission(self, request, view, obj):
        if isinstance(obj, Post):
            if request.method in permissions.SAFE_METHODS:
                return True
            request_user = request.user
            if isinstance(request_user, AnonymousUser):
                return False
            if request_user.is_admin:
                return True
            return obj.store in request_user.profile.owned_stores.all()
