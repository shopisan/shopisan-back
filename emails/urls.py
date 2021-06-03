from django.urls import path

from . import views

urlpatterns = [
    path('test/<slug:email_template>/', views.index),
]
