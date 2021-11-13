from django.urls import path
from .views import hello, signup
from rest_framework.authtoken.views import obtain_auth_token

app_name = "account_api"
urlpatterns = [
    path('', hello, name="hello"),
    path('signup', signup, name="signup"),
    path('login', obtain_auth_token, name='login')
]
