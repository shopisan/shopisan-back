from django.urls import path
from rest_framework.authtoken import views as auth_views
from . import views

urlPatterns = [
    path('token-auth/', auth_views.obtain_auth_token),
    path('register/', views.CreateNewUser.as_view()),
    path('get_user/', views.get_current_user),
]
