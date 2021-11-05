from django.contrib import admin
from moviedb.models import Movie, Category, Actor

# Register your models here.
admin.site.register(Movie)
admin.site.register(Category)
admin.site.register(Actor)