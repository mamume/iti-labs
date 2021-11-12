from django.urls import path
from .views import create_movie, movies_details, update_movie

app_name = 'multimedia'

urlpatterns = [
    path('create', create_movie, name="create_movie"),
    path('details', movies_details, name="movies_details"),
    path('update/<int:id>', update_movie, name="update_movie"),
]