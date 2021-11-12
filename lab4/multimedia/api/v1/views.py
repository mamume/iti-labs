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

@api_view(["PATCH", "PUT"])
def update_movie(request, id):
    response ={}

    try:
        movie = Movie.objects.get(pk=id)

        if request.method == 'PUT':
            serialized_movie = MovieSerializer(instance=movie, data=request.data)
        else:
            serialized_movie = MovieSerializer(instance=movie, data=request.data, partial=True)

        if serialized_movie.is_valid():
            serialized_movie.save()
            response['data'] = serialized_movie.data
            response['status'] = status.HTTP_200_OK
        else:
            response['data'] = serialized_movie.error
            response['status'] = status.HTTP_400_BAD_REQUEST

    except Exception as e:
        response['data'] = {'message': str(e)}
        response['status'] = status.HTTP_400_BAD_REQUEST

    return Response(**response)

@api_view(['DELETE'])
def delete_movie(request, id):
    response = {}

    try:
        movie = Movie.objects.get(pk=id)
        movie.delete()

        response['data'] = {'message': f'movie with id={id} was deleted successfully'}
        response['status'] = status.HTTP_200_OK
    except Exception as e:
        response['data'] = {'message': f'Error: {str(e)}'}
        response['status'] = status.HTTP_400_BAD_REQUEST

    return Response(**response)