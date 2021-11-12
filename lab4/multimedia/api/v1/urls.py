from django.urls import path
from .views import create_movie, movies_details

app_name = 'multimedia'

urlpatterns = [
    path('create', create_movie, name="create_movie"),
    path('details', movies_details, name="movies_details")
]