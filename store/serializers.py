from .models import Store, StoreCategories, Address, Evaluation
from rest_framework import serializers
from .maps import fetch_localisation
from file_management.serializers import FileSerializer


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ["id", "streetAvenue", "postalCode", "city", "country", 'latitude', 'longitude', 'store']
        read_only_fields = ['latitude', 'longitude', 'store']
        extra_kwargs = {"id": {'read_only': False, 'required': False}}


class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = "__all__"
        read_only_fields = ['profile']

    def create(self, validated_data):
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            profile = request.user.profile
            previous = Evaluation.objects.filter(profile=profile.id, store=validated_data["store"])
            for eval in previous:
                eval.delete()
            evaluation = Evaluation(**validated_data)
            evaluation.profile = profile
            evaluation.save()
            return evaluation

        raise ValueError()


class StoreCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreCategories
        fields = ['id', 'url', 'en', 'fr']


class StoreSerializer(serializers.HyperlinkedModelSerializer):
    addresses = AddressSerializer(many=True)
    evaluations = EvaluationSerializer(many=True, read_only=True)
    categories = StoreCategorySerializer(many=True)
    profilePicture = FileSerializer()

    class Meta:
        model = Store
        fields = ['id', 'name', 'description', 'url', 'website', 'storeStatus', 'openingTimes', 'profilePicture',
                  'categories', 'addresses', 'evaluations', 'average_score', 'appointmentOnly']
        read_only_fields = ('storeStatus',)


class StoreWriteSerializer(serializers.HyperlinkedModelSerializer):
    addresses = AddressSerializer(many=True)
    evaluations = EvaluationSerializer(many=True, read_only=True)

    class Meta:
        model = Store
        fields = ['id', 'name', 'description', 'url', 'website', 'storeStatus', 'openingTimes', 'profilePicture',
                  'categories', 'addresses', 'evaluations', 'average_score', 'appointmentOnly']
        read_only_fields = ('storeStatus',)

    def create(self, validated_data):
        addresses = validated_data.pop('addresses')
        categories = validated_data.pop('categories')
        store = Store(**validated_data)
        store.save()

        for category in categories:
            store.categories.add(category)

        for address in addresses:
            address_obj = Address(**address)
            fetch_localisation(address_obj)
            address_obj.store = store
            address_obj.save()

        request = self.context.get("request")
        store.owner = request.user.profile
        store.save()

        return store

    def update(self, instance, validated_data):
        addresses = validated_data.pop('addresses')
        addresses_dict = dict((i.id, i) for i in instance.addresses.all())
        instance.save()

        for address in addresses:
            if "id" in address and address["id"] != 0:
                address_obj = addresses_dict.pop(address['id'])
                get_location = False
                if (address_obj.streetAvenue != address['streetAvenue'] or
                        address_obj.postalCode != address['postalCode'] or
                        address_obj.city != address['city'] or address_obj.country != address['country']):
                    get_location = True
                address_obj.streetAvenue = address['streetAvenue']
                address_obj.postalCode = address['postalCode']
                address_obj.city = address['city']
                address_obj.country = address['country']

                if get_location:
                    fetch_localisation(address_obj)

                address_obj.save()
            else:
                address['id'] = None
                address_obj = Address.objects.create(store=instance, **address)
                fetch_localisation(address_obj)
                address_obj.save()

        if len(addresses_dict) > 0:
            for item in addresses_dict.values():
                item.delete()

        return super().update(instance, validated_data)


