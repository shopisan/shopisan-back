from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from functools import cmp_to_key

from .models import Store, StoreCategories, City, Country
from .serializers import StoreSerializer, StoreCategorySerializer, CountrySerializer, CitySerializer
from .maps import haversine_distance

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
    permission_classes = [permissions.AllowAny]


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
        categories_str = self.request.query_params.get('categories', None)
        position = self.request.query_params.get('position', None)

        if categories_str is None:
            stores = Store.objects.all()
        else:
            categories = categories_str.split(',')
            stores = Store.objects.filter(categories__in=categories)

        if position is not None:
            pos = position.split(',')
            user_coordinates = {
                'lat':  pos[0],
                'lng': pos[1]
            }

            def compare(item1: Store, item2: Store):
                if item1.latitude is None or item1.longitude is None:
                    return 1

                if item2.latitude is None or item2.longitude is None:
                    return -1
                return haversine_distance(item1, user_coordinates) - haversine_distance(item2, user_coordinates)

            sorted(stores, key=cmp_to_key(compare))

        # if categories_str is None:
            # todo limiter le nombre de rows

        return stores

# todo créer la vue pour voir les stores selon les catégories + géolocalisation (limiter a XX km)
#       ==> empecher de venit-r pomper tout les stores
