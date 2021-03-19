from .models import Store, StoreCategories, Address, Evaluation
from rest_framework import fields, serializers
from .maps import fetch_localisation


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = "__all__"


class StoreSerializer(serializers.HyperlinkedModelSerializer):
    addresses = AddressSerializer(many=True, read_only=True)
    evaluations = EvaluationSerializer(many=True, read_only=True)

    class Meta:
        model = Store
        # fields = "__all__"
        fields = ['id', 'name', 'url', 'website', 'storeStatus', 'openingTimes', 'profilePicture', 'categories',
                  'addresses', 'evaluations']
        extra_kwargs = {'storeStatus': {'read_only': True}}

    def create(self, validated_data):
        # todo a la cré&ation et a l'update, transformer adresse en coord géo
        store = Store(**validated_data)

        # todo a revoir pour adapter avec les adresses multiples
        coordinates = fetch_localisation(store)

        store.save()
        return store

    def update(self, instance, validated_data):
        # todo à l'update, transformer adresse en coord géo (possible d'ajouter check si modif? comparer instance avec validated data?
        # if 'faucets' in validated_data:
        #     faucets_data = validated_data.pop('faucets')
        #     for faucet_data in faucets_data:
        #         # Attention n'envoyer que les faucets a uploader
        #         Faucet.objects.create(list=instance, **faucet_data)

        return super().update(instance, validated_data)

# todo créer le serializer pour les catégories, countries, city


class StoreCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StoreCategories
        fields = ['id', 'url', 'en', 'fr']

