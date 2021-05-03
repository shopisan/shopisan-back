from rest_framework import viewsets, generics
from rest_framework import permissions
from .permissions import IsOwnerOrAdminOrReadOnly
from api.permissions import IsAdminOrReadOnly
from functools import cmp_to_key
from .models import Store, StoreCategories, Address, Evaluation, Countries, City
from .serializers import StoreSerializer, StoreWriteSerializer, StoreCategorySerializer, AddressSerializer, \
    EvaluationSerializer, CountrySerializer, CitySerializer
from .maps import get_shortest_distance


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def get_serializer_class(self):
        if self.action == 'list':
            return StoreSerializer
        if self.action == 'retrieve':
            return StoreSerializer

        return StoreWriteSerializer


class StoreCategoriesSet(viewsets.ModelViewSet):
    queryset = StoreCategories.objects.all()
    serializer_class = StoreCategorySerializer
    permission_classes = [IsAdminOrReadOnly]


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    permission_classes = [permissions.IsAdminUser]


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CountryList(generics.ListAPIView):
    serializer_class = CountrySerializer
    queryset = Countries.objects.all()


class CitiesByCountryList(generics.ListAPIView):
    serializer_class = CitySerializer

    def get_queryset(self):
        country = self.request.query_params.get('country', None)
        queryset = City.objects.filter(country__iso=country).order_by('en')
        return queryset


class StoreCategoryGeoList(generics.ListAPIView):
    serializer_class = StoreSerializer

    def get_queryset(self):
        categories_str = self.request.query_params.get('categories', None)
        countries_str = self.request.query_params.get('countries', None)
        position = self.request.query_params.get('position', None)
        countries = countries_str.split(',')

        if categories_str is None:
            stores = Store.objects.filter(addresses__country__in=countries).exclude(storeStatus=2, addresses=None)\
                .distinct()
        else:
            categories = categories_str.split(',')
            stores = Store.objects.filter(addresses__country__in=countries).filter(categories__in=categories)\
                .exclude(storeStatus=2, addresses=None).distinct()

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

