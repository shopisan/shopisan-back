from rest_framework import viewsets, generics
from rest_framework import permissions
from functools import cmp_to_key

from .models import Store, StoreCategories, Address, Evaluation
from .serializers import StoreSerializer, StoreWriteSerializer, StoreCategorySerializer, AddressSerializer, \
    EvaluationSerializer
from .maps import get_shortest_distance


# todo dans le serializer de l'entité store, ajouter le call api pour chopper lat et long


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    # todo définir permissions ==> permettre au store owners de créer
    # todo seulement les admins doivent avoir acces a tout les stores
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.action == 'list':
            return StoreSerializer
        if self.action == 'retrieve':
            return StoreSerializer

        return StoreWriteSerializer


class StoreCategoriesSet(viewsets.ModelViewSet):
    queryset = StoreCategories.objects.all()
    serializer_class = StoreCategorySerializer
    # todo faire une permission accès readOnly pour tout le monde, et edit uniquement pour les admis
    permission_classes = [permissions.AllowAny]


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    # todo faire une permission accès readOnly pour tout le monde, et edit uniquement pour les admis
    permission_classes = [permissions.IsAdminUser]


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer
    # todo faire une permission accès readOnly pour tout le monde, et edit uniquement pour les admis
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class StoreCategoryGeoList(generics.ListAPIView):
    serializer_class = StoreSerializer

    def get_queryset(self):
        categories_str = self.request.query_params.get('categories', None)
        position = self.request.query_params.get('position', None)

        if categories_str is None:
            stores = Store.objects.exclude(addresses=None)
        else:
            categories = categories_str.split(',')
            stores = Store.objects.filter(categories__in=categories)

        if position is not None:
            print(position)
            pos = position.split(',')
            user_coordinates = {
                'lat':  pos[0],
                'lng': pos[1]
            }

            def compare(item1: Store, item2: Store):
                return get_shortest_distance(item1, user_coordinates) - get_shortest_distance(item2, user_coordinates)

            stores = sorted(stores, key=cmp_to_key(compare))

        # if categories_str is None:
            # todo limiter le nombre de rows

        stores = stores[0:50]

        return stores

