from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token


@api_view(['GET'])
@permission_classes([])
def hello(request):
    data = {
        "message": "hello"
    }
    return Response(data=data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([])
def signup(request):
    user_serialized = UserSerializer(data=request.data)
    response = {}

    if user_serialized.is_valid():
        user_serialized.save()
        response['data'] = {
            'user': user_serialized.data,
            'token': Token.objects.get(user__username=user_serialized.data.get('username')).key
        }
        response['status'] = status.HTTP_201_CREATED
    else:
        response['data'] = user_serialized.errors,
        response['status'] = status.HTTP_400_BAD_REQUEST

    return Response(**response)
