from django.urls import path, include, re_path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'posts', views.PostViewSet)
router.register(r'postMedias', views.PostMediaViewSet)

urlpatterns = [
    path('posts/', include(router.urls)),
    path('posts_by_owned_stores/', views.get_posts_by_owned_stores),
    re_path('posts/by_store/(?P<store>.+)/$', views.PostByStore.as_view()),
]
