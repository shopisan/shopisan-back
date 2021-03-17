from django.urls import path, include, re_path
from . import views

# todo check pourquoi ca plante
urlpatterns = [
    path('', views.get_url_names),
    path('', include('file_management.urls')),
    path('', include('store.urls')),
    # path('', include('interaction.urls')),
    path(r'', include('user.urls')),
]
