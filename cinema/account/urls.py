from django.urls import path
from .views import login

urlpatterns = [
    path('signup/', signup, name='signup')
]