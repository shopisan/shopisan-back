from .models import Store, StoreCategories, Country, City
from rest_framework import fields, serializers
from .maps import fetch_localisation


class StoreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Store
        fields = "__all__"
        extra_kwargs = {'latitude': {'read_only': True}, 'longitude': {'read_only': True},
                        'storeStatus': {'read_only': True}}
        # fields = ['id', 'name', 'url', 'votes', 'list']

    def create(self, validated_data):
        # todo a la cré&ation et a l'update, transformer adresse en coord géo
        store = Store(**validated_data)

        # todo créer les city
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
        fields = "__all__"


class CountrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Country
        fields = "__all__"


class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = "__all__"
