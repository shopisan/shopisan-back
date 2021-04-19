from rest_framework import generics, status
from rest_framework import permissions
from rest_framework.response import Response

from .models import ContactTicket, StoreContactTicket
from .serializers import ContactTicketSerializer, StoreContactTicketSerializer


class ContactTicketViewSet(generics.CreateAPIView):
    queryset = ContactTicket.objects.all()
    serializer_class = ContactTicketSerializer
    permission_classes = [permissions.AllowAny]


class StoreContactTicketViewSet(generics.CreateAPIView):
    queryset = StoreContactTicket.objects.all()
    serializer_class = StoreContactTicketSerializer
    permission_classes = [permissions.AllowAny]
