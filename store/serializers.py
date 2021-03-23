from .models import Store, StoreCategories, Address, Evaluation
from rest_framework import serializers
from .maps import fetch_localisation


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = "__all__"
        read_only_fields = ['profile']

    def create(self, validated_data):
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
            evaluation = Evaluation(**validated_data)
            evaluation.profile = user.profile
            evaluation.save()
            return evaluation

        raise ValueError()


class StoreCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreCategories
        fields = ['id', 'url', 'en', 'fr']


class StoreSerializer(serializers.HyperlinkedModelSerializer):
    addresses = AddressSerializer(many=True, read_only=True)
    evaluations = EvaluationSerializer(many=True, read_only=True)
    categories = StoreCategorySerializer(many=True)

    class Meta:
        model = Store
        fields = ['id', 'name', 'url', 'website', 'storeStatus', 'openingTimes', 'profilePicture', 'categories',
                  'addresses', 'evaluations', 'average_score']
        read_only_fields = ('storeStatus',)

    def create(self, validated_data):
        store = Store(**validated_data)
        store.save()
        addresses = validated_data.pop('addresses')

        # todo a tester
        for address in addresses:
            address_obj = Address(**address)
            fetch_localisation(address_obj)
            address_obj.store = store
            address_obj.save()

        return store

    def update(self, instance, validated_data):
        # todo à l'update, transformer adresse en coord géo (possible d'ajouter check si modif? comparer instance avec validated data?
        # if 'faucets' in validated_data:
        #     faucets_data = validated_data.pop('faucets')
        #     for faucet_data in faucets_data:
        #         # Attention n'envoyer que les faucets a uploader
        #         Faucet.objects.create(list=instance, **faucet_data)

        return super().update(instance, validated_data)


