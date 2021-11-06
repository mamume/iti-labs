from django.contrib import admin
from moviedb.models import Movie, Category, Actor, Director, ActorID

class MovieAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'rating', 'director', 'list_actors')
    search_fields = ('name', 'rating')
    ordering = ['name']

    def list_actors(self, obj):
        actors = obj.cast.all()
        name = ''
        for actor in actors:
            name += actor.name + ' '
        return name

# Register your models here.
admin.site.register(Movie, MovieAdmin)
admin.site.register(Category)
admin.site.register(Actor)
admin.site.register(Director)
admin.site.register(ActorID)