from rest_framework import serializers
from multimedia.models import Movie, Serie, Category, Actor


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ['name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class MovieSerializer(serializers.ModelSerializer):
    # casts = ActorSerializer('casts', many=True)
    # categories = CategorySerializer('categories', many=True)
    
    class Meta:
        model = Movie
        fields = ('__all__')
        # read_only_fields = ('casts', 'categories')
        depth = 1

    # def list_actors(self, obj):
    #     actors = obj.casts.all()
    #     name = ''
    #     for actor in actors:
    #         name += actor.name + ' '
    #     return name

class SerieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serie
        fields = '__all__'


