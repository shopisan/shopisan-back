from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'stores', views.StoreViewSet)
router.register(r'categories', views.StoreCategoriesSet)
router.register(r'evals', views.EvaluationViewSet)
# router.register(r'cities', views.CitySet)
# router.register(r'countries', views.CountrySet)
# router.register(r'stores_geo', , basename='stores')

urlpatterns = [
    path('stores/', include(router.urls)),
    path("stores_geo/", views.StoreCategoryGeoList.as_view()),
    path("countries/", views.CountryList.as_view())
]
