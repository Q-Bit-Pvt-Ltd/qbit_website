from django.urls import path
from . import views

urlpatterns = [
    path('cropsync', views.index, name='cropsync')
      # Root URL for the app
]
