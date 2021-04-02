from .models import User, Profile
from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from store.models import Store

from .serializers import UserSerializer, ProfileSerializer, UserWriteSerializer, UserRegistrationSerializer


@api_view(["GET"])
def get_current_user(request):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(instance=user, context={'request': request})
    return Response(serializer.data)


@api_view(["POST"])
def handle_favourite_store(request):
    user = User.objects.get(id=request.user.id)
    favourite_stores = user.profile.favourite_stores.all()
    store_id = request.data.pop("favourite_store")
    store = Store.objects.get(pk=store_id)

    if store in favourite_stores:
        user.profile.favourite_stores.remove(store)
    else:
        user.profile.favourite_stores.add(store)

    user.save()
    serializer = UserSerializer(instance=user, context={'request': request})
    return Response(serializer.data)


class CreateNewUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_serializer_class(self):
        if self.action == 'list':
            return UserSerializer
        if self.action == 'retrieve':
            return UserSerializer
        # ici ce sont les write (delete, update, create)
        return UserWriteSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAdminUser]

