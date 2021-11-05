from django.urls import path
from . import views

app_name = 'moviedb'

urlpatterns = [
    path('', views.index, name='index'),
    path('create_movie/', views.create_movie, name='create_movie'),
    path('movie_details/<int:id>', views.movie_details, name='view'),
    path('edit_movie/<int:id>', views.edit_movie, name='edit'),
    path('delete_movie/<int:id>', views.delete_movie, name='delete')
]