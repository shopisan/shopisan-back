from rest_framework import permissions

from .models import Store


class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if isinstance(obj, Store):
            if request.method in permissions.SAFE_METHODS:
                return True
            request_user = request.user
            if request_user.is_admin:
                return True
            return obj.owner == request_user.profile

        # elif isinstance(obj, Faucet):
        #     if request.method in permissions.SAFE_METHODS:
        #         return True
        #     return obj.list.user == request.user
