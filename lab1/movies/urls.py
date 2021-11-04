from django.urls import path
from .views import index

app_name = 'movies'

urlpatterns = [
    path('', index, name='index')
]