from django.urls import path, include, re_path
from . import views


urlpatterns = [
    path('', views.get_url_names),
    path('', include('file_management.urls')),
    path('', include('store.urls')),
    path('', include('feed.urls')),
    path('', include('contact.urls')),
    # path('', include('interaction.urls')),
    path(r'', include('user.urls')),
]
