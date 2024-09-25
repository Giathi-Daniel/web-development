# obituaries/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_obituaries, name='view_obituaries'),  # List view for obituaries
    path('add/', views.add_obituary, name='add_obituary'),  # Form to add a new obituary
    path('<slug:slug>/', views.obituary_detail, name='obituary_detail'),  # Detail view for a single obituary
]
