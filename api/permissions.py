from rest_framework import permissions

# from list.models import List, Faucet


# class IsOwnerOrReadOnly(permissions.BasePermission):
    # todo adapter ca pour les Stores ==> empecher y de mofifier le store de x
    # def has_object_permission(self, request, view, obj):
        # if isinstance(obj, List):
        #     if request.method in permissions.SAFE_METHODS:
        #         return True
        #     return obj.user == request.user
        #
        # elif isinstance(obj, Faucet):
        #     if request.method in permissions.SAFE_METHODS:
        #         return True
        #     return obj.list.user == request.user
