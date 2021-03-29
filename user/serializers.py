from .models import User, Profile
from rest_framework import serializers
from file_management.serializers import FileSerializer
from store.serializers import StoreSerializer


class ProfileSerializer(serializers.ModelSerializer):
    picture = FileSerializer(read_only=True)
    favourite_stores = StoreSerializer(many=True)
    owned_stores = StoreSerializer(many=True)

    class Meta:
        model = Profile
        fields = '__all__'
        read_only_fields = ["favourite_stores", "user"]


class ProfileWriteSerializer(serializers.HyperlinkedModelSerializer):
    # picture = FileSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'
        read_only_fields = ["favourite_stores", "user", "owned_stores"]

    def update(self, instance, validated_data):
        picture = validated_data.pop("picture")
        print(picture)
        instance.save()

        return instance


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['id', 'url', 'profile', 'last_login', 'email', 'username', 'is_active', 'is_admin', 'created',
                  'is_owner']
        read_only_fields = ["created", "last_login", "url"]
        extra_kwargs = {'password': {'write_only': True}, 'stores': {'read_only': True}}


class UserWriteSerializer(serializers.HyperlinkedModelSerializer):
    profile = ProfileWriteSerializer()

    class Meta:
        model = User
        fields = ['id', 'url', 'profile', 'last_login', 'email', 'username', 'is_active', 'is_admin', 'created',
                  'is_owner']
        read_only_fields = ["created", "last_login", "url"]
        extra_kwargs = {'password': {'write_only': True}, 'stores': {'read_only': True}}

    def create(self, validated_data):
        if validated_data['email'] == "":
            raise serializers.ValidationError({"email": "The email field cannot be blank"})

        if User.objects.filter(email=validated_data['email']).exists():
            raise serializers.ValidationError({"email": "This email address is already registered"})

        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        profile = validated_data.pop("profile")
        print(profile)
        profile_obj = instance.profile
        # print("picture" + profile['picture'])
        profile_obj.picture = profile['picture']
        profile_obj.name = profile['name']
        profile_obj.surname = profile['surname']
        profile_obj.date_of_birth = profile['date_of_birth']
        profile_obj.save()
        instance.save()

        return instance
