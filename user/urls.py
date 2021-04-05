from django.urls import path, include
from rest_framework.authtoken import views as auth_views
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profiles', views.ProfileViewSet)

urlpatterns = [
    path('users/', include(router.urls)),
    path('token-auth/', auth_views.obtain_auth_token),
    path('register/', views.CreateNewUser.as_view()),
    path('forgot-password/', views.forgot_password),
    path('reset-password/', views.reset_password),
    path('get_user/', views.get_current_user),
    path('manage_favourite_store/', views.handle_favourite_store),
]
