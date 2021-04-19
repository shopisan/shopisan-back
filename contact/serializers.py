from user.models import User
from .models import ContactTicket, StoreContactTicket
from rest_framework import serializers
from django.contrib.auth.hashers import make_password


class ContactTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactTicket
        fields = "__all__"
        read_only_fields = ['processed']


class StoreContactTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreContactTicket
        fields = "__all__"
        read_only_fields = ['processed']

    def validate_email(self, value):
        check_email = User.objects.filter(email=value)
        if check_email.count() > 0:
            raise serializers.ValidationError("Email already in use")
        return value

    def validate_username(self, value):
        check_username = User.objects.filter(username=value)
        if check_username.count() > 0:
            raise serializers.ValidationError("Username taken")
        return value

    def create(self, validated_data):
        raw_password = validated_data.pop("password")
        password = make_password(raw_password)
        ticket = StoreContactTicket(**validated_data)
        ticket.password = password

        ticket.save()

        return ticket
