from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

urlpatterns = [
    # path('posts/', include(router.urls)),
    path('add_contest_code/', views.add_code_to_user),
]
