from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Store, StoreCategories, City, Country
from .serializers import StoreSerializer, StoreCategorySerializer, CountrySerializer, CitySerializer

# todo dans le serializer de l'entité store, ajouter le call api pour chopper lat et long


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    # todo définir permissions ==> permettre au store owners de créer
    # todo seulement les admins doivent avoir acces a tout les stores
    permission_classes = [permissions.IsAdminUser]


class StoreCategoriesSet(viewsets.ModelViewSet):
    queryset = StoreCategories.objects.all()
    serializer_class = StoreCategorySerializer
    # todo faire une permission accès readOnly pour tout le monde, et edit uniquement pour les admis
    permission_classes = [permissions.IsAdminUser]


class CountrySet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    # todo faire une permission accès readOnly pour tout le monde, et edit uniquement pour les admis
    permission_classes = [permissions.IsAdminUser]


class CitySet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    # todo faire une permission accès readOnly pour tout le monde, et edit uniquement pour les admis
    permission_classes = [permissions.IsAdminUser]


class StoreCategoryGeoList(generics.ListAPIView):
    serializer_class = StoreSerializer

    def get_queryset(self):
        categoriesStr = self.request.query_params.get('categories', None)
        categories = categoriesStr.split(',')
        position = self.request.query_params.get('position', None)

        # todo check comment permettre de  filtrer selon plusieurs categories
        stores = Store.objects.filter(categories__in=categories)
        # todo order selon la proximité

        return stores

# todo créer la vue pour voir les stores selon les catégories + géolocalisation (limiter a XX km)
#       ==> empecher de venit-r pomper tout les stores
