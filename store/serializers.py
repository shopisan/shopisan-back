from .models import Store, StoreCategories, Country, City
from rest_framework import fields, serializers


class StoreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Store
        # fields = ['id', 'name', 'url', 'votes', 'list']

    def create(self, validated_data):
        # todo a la cré&ation et a l'update, transformer adresse en coord géo
        # todo ajouter une validation?
        store = Store(**validated_data)
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


class CountrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Country


class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
