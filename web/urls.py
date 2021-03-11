from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('<slug:react_param>/', views.index),
]
