from rest_framework import viewsets, generics
from rest_framework import permissions
from functools import cmp_to_key
from django.db.models import Q
from .models import Store, StoreCategories, Address, Evaluation
from .serializers import StoreSerializer, StoreWriteSerializer, StoreCategorySerializer, AddressSerializer, \
    EvaluationSerializer
from .maps import get_shortest_distance


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
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
            stores = Store.objects.exclude(storeStatus=2, addresses=None)
        else:
            categories = categories_str.split(',')
            stores = Store.objects.filter(categories__in=categories).exclude(storeStatus=2, addresses=None)

        if position is not None:
            pos = position.split(',')
            user_coordinates = {
                'lat':  pos[0],
                'lng': pos[1]
            }

            def compare(item1: Store, item2: Store):
                return get_shortest_distance(item1, user_coordinates) - get_shortest_distance(item2, user_coordinates)

            stores = sorted(stores, key=cmp_to_key(compare))

        # stores = stores[0:50]

        return stores

