from .models import User
from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer


@api_view(["GET"])
def get_current_user(request):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(instance=user, context={'request': request})
    return Response(serializer.data)


class CreateNewUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

