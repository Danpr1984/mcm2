from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.permissions import IsAuthenticated
from django.views.generic.base import TemplateView
from .models import Color, MyModel
from .serializers import UserRegisterSerializer, UserLoginSerializer, ColorSerializer, UserSerializer
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import JsonResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model, login, logout, authenticate
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from .validations import custom_validation, validate_email, validate_password
from django.shortcuts import redirect, render


class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			print(serializer.data)
			return Response(serializer.data, status=status.HTTP_200_OK)
		return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			# return Response(user, status=status.HTTP_200_OK)
			# Redirect to the index view upon successful login
		return Response(status=status.HTTP_400_BAD_REQUEST)
	
			
class UserRegistrationAPIView(APIView):
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"success": True, "message": "User registered successfully."}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)		


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)
	
@api_view(['POST'])
def assign_color_to_song(request):
	user_id = request.data.get('user_id')
	color_id = request.data.get('color_id')
	song_id = request.data.get('song_id')

	user = AppUser.objects.get(id=user_id)
	color = Color.objects.get(id=color_id)
	song = Song.objects.get(id=song_id)
	user_color_music = UserColorMusic(user=user, color=color)
	user_color_music.save()
	user_color_music.music.add(song)

	return Response({'message': 'Color assigned to song for user'})	
	
def color_list(request):
    colors = Color.objects.all()
    data = [{'id': color.id, 'name': color.name} for color in colors]
    return JsonResponse(data, safe=False)	

from rest_framework.views import APIView
from .models import Song
from .serializers import SongSerializer

class SongList(APIView):
    """
    List all songs, or create a new song.
    """
    def get(self, request, format=None):
        songs = Song.objects.all()
        serializer = SongSerializer(songs, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_song(request, song_id):
		try:
			song = Song.objects.get(id=song_id)
			return JsonResponse({'song': song})
		except Song.DoesNotExist:
			return JsonResponse({'error': 'Song not found'}, status=404)	

	

class IndexView(TemplateView):
    template_name = 'index.html'