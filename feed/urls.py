from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'posts', views.PostViewSet)
router.register(r'postMedias', views.PostMediaViewSet)
# router.register(r'categories', views.PostMediaViewSet)

urlpatterns = [
    path('posts/', include(router.urls)),
]
