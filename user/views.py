import secrets
import string
import datetime
from pytz import timezone
import pytz

from emails import send_mail
from .models import User, Profile
from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from store.models import Store
from .serializers import UserSerializer, ProfileSerializer, UserWriteSerializer, UserRegistrationSerializer

brussels = timezone('UTC')


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


@api_view(["POST"])
def forgot_password(request):
    email = request.data.pop("email")
    user = User.objects.get(email=email)
    if user is None:
        return Response({"success": False})

    letters = string.ascii_letters + string.digits
    token = ''.join(secrets.choice(letters) for i in range(12))
    user.reset_password_token = token
    user.reset_password_validity = brussels.localize(datetime.datetime.now() + datetime.timedelta(hours=1))
    user.save()

    send_mail(subject="Réinitialisation de votre mot de passe", recipient_list=[email],
              template="emails/includes/reset_password_token.html", variables={"token": token})
    # send_mail(subject="Réinitialisation de votre mot de passe", from_email='"Shopisan" <info@jh8.dev>',
    #           recipient_list=[email], message=message, html_message=html_message)

    return Response({"success": True})


@api_view(["POST"])
def reset_password(request):
    email = request.data.pop("email")
    token = request.data.pop("token")
    password = request.data.pop("password")
    user = User.objects.get(email=email)
    if user is None:
        return Response({"success": False})

    now = datetime.datetime.now()
    now = brussels.localize(now) # todo rendre le datetime timezone aware

    if now > user.reset_password_validity:
        print("datetime fail")

        return Response({"success": False})

    if token != user.reset_password_token:
        print("token fail")

        return Response({"success": False})

    user.set_password(password)
    user.reset_password_token = None
    user.reset_password_validity = None
    user.save()

    return Response({"success": True})


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
