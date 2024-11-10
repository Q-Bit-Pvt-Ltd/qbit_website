from django.urls import path
from . import views

urlpatterns = [
    path('test', views.test_firestore_connection, name='test'),  # Root URL for the app
]
