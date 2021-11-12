from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import MovieSerializer
from multimedia.models import Movie

@api_view(["POST"])
def create_movie(request):
    serialized_movie = MovieSerializer(data=request.data)
    response = {}

    if serialized_movie.is_valid():
        serialized_movie.save()
        response['data'] = {
            'message': 'Movie Created Successfully',
            'id': serialized_movie.data.get('id')
        }
        response['status'] = status.HTTP_200_OK

        return Response(**response)
    else:
        return Response(data=serialized_movie.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def movies_details(request):
    all_movies = Movie.objects.all()
    serialized_movies = MovieSerializer(instance=all_movies, many=True)

    return Response(data=serialized_movies.data, status=status.HTTP_200_OK)