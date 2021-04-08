from django.urls import path
from . import views


urlpatterns = [
    path('contact/', views.ContactTicketViewSet.as_view()),
    path('store_contact/', views.StoreContactTicketViewSet.as_view()),
]