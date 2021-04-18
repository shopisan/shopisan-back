from rest_framework import generics
from rest_framework import permissions

from .models import ContactTicket, StoreContactTicket
from .serializers import ContactTicketSerializer, StoreContactTicketSerializer


class ContactTicketViewSet(generics.CreateAPIView):
    queryset = ContactTicket.objects.all()
    serializer_class = ContactTicketSerializer
    permission_classes = [permissions.IsAdminUser]


class StoreContactTicketViewSet(generics.CreateAPIView):
    queryset = StoreContactTicket.objects.all()
    serializer_class = StoreContactTicketSerializer
    permission_classes = [permissions.IsAdminUser]

