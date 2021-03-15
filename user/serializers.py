from .models import User, Profile
from rest_framework import fields, serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        # fields = ['id', 'url', 'lists', 'username', 'email', 'groups', 'password']
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}, 'stores': {'read_only': True}}

    def create(self, validated_data):
        # todo ajouter les validations sur owner, etc

        if validated_data['email'] == "":
            raise serializers.ValidationError({"email": "The email field cannot be blank"})

        if User.objects.filter(email=validated_data['email']).exists():
            raise serializers.ValidationError({"email": "This email address is already registered"})

        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    model = Profile

