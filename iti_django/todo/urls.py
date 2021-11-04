from django.urls import path
from .views import index, view, edit, delete, movies

app_name = 'todo'

urlpatterns = [
    path('', index, name='index'),
    path('view/<int:todo_id>', view, name='view'),
    path('edit/<int:todo_id>', edit, name='edit'),
    path('delete/<int:todo_id>', delete, name='delete'),
    path('movies', movies, name='movies')
]