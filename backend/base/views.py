import json


from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from django.http import JsonResponse
from django.contrib import auth
from django.contrib.auth.models import User
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.views.decorators.http import require_POST
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer, SongSerializer, AssignedSongSerializer
from .models import AssignedSong, Color, Song

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        user = self.request.user

        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                return Response({ 'isAuthenticated': 'success' })
            else:
                return Response({ 'isAuthenticated': 'error' })
        except:
            return Response({ 'error': 'Something went wrong when checking authentication status' })


@api_view(['POST'])
@permission_classes([AllowAny])
@require_POST
def login_view(request):
    try:
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        errors = {}

        if username is None or password is None:
            errors['username'] ='Please provide username and password.'
            errors['password'] ='Please provide username and password.'

        user = auth.authenticate(username=username, password=password)

        if user is None:
            errors['username'] = 'Invalid credentials.'
            errors['password'] = 'Invalid credentials.'

        if errors:
            return JsonResponse({'error': errors}, status=400)

        auth.login(request, user)
        serializer = UserSerializer(user)
        return  Response({'user': serializer.data}, status=status.HTTP_200_OK)

    except Exception as e:
        return JsonResponse({'error': f'Something went wrong when logging in - {str(e)}'}, status=400)



@api_view(['POST'])
@permission_classes([AllowAny])
@require_POST
def register_view(request):
    try:
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        re_password = data.get('re_password')

        errors = {}

        if username is None or password is None or re_password is None:
            errors['username'] ='Please provide username, password, and re_password.'

        if User.objects.filter(username=username).exists():
            errors['username'] = 'Username already exists.'

        if len(username) < 6:
            errors['username'] = 'Username must be at least 6 characters.'

        if len(password) < 8:
            errors['password'] = 'Password must be at least 8 characters.'

        if password != re_password:
            errors['password'] = 'Passwords do not match.'
            errors['re_password'] = 'Passwords do not match.'

        if errors:
            return JsonResponse({'error': errors}, status=400)

        user = User.objects.create_user(username=username, password=password)
        user.save()

        return JsonResponse({'success': 'User created successfully.'}, status=201)

    except Exception as e:
        return JsonResponse({'error': f'Something went wrong when registering account - {str(e)}'}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@require_POST
def logout_view(request):
    try:
        # Assuming you have a valid token or session for the user
        # You may need to implement token or session validation logic

        # Log out the user
        auth.logout(request)

        return JsonResponse({'detail': 'User logged out successfully.'}, status=status.HTTP_200_OK)
    except Exception as e:
        return JsonResponse({'error': f'Something went wrong during logout - {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# @method_decorator(csrf_protect, name='dispatch')
# class SignupView(APIView):
#     permission_classes = (permissions.AllowAny, )

#     def post(self, request, format=None):
#         data = self.request.data

#         username = data['username']
#         password = data['password']
#         re_password  = data['re_password']

#         print(username, password, re_password)

#         try:
#             if password == re_password:
#                 if User.objects.filter(username=username).exists():
#                     return Response({ 'error': 'Username already exists' })
#                 else:
#                     if len(password) < 6:
#                         return Response({ 'error': 'Password must be at least 6 characters' })
#                     else:
#                         user = User.objects.create_user(username=username, password=password)
#                         user.save()



#                         return Response({ 'success': 'User created successfully' })
#             else:
#                 return Response({ 'error': 'Passwords do not match' })
#         except:
#                 return Response({ 'error': 'Something went wrong when registering account' })

class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })


def get_csrf(request):
    response = JsonResponse({'detail': 'CSRF cookie set'})
    response['X-CSRFToken'] = get_token(request)
    return response


@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'isAuthenticated': True})


@api_view(['GET'])
@permission_classes([AllowAny])
def whoami_view(request):

    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    serializer = UserSerializer(request.user)
    return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class UserSongsView(APIView):
    permission_classes =(permissions.IsAuthenticated, )

    def get(self, request):
        assigned_songs = request.user.user_songs.all()
        song_serializer = AssignedSongSerializer(assigned_songs, many=True)
        return Response({'user_songs': song_serializer.data}, status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes =(permissions.IsAuthenticated, )

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)



class AssignColorToSong(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):
        color = request.data.get('color')
        track = request.data.get('track')
        user = request.user


        color = Color.objects.get(name=color)
        track_id = track['id']
        name = track['name']
        artist = track['artists'][0]['name']
        album = track['album']['name']
        image = track['album']['images'][0]['url']
        preview_url = track['preview_url']

        song, created = Song.objects.get_or_create(
            id=track_id, 
            defaults={'name': name, 'artist': artist, 'album': album, 'image': image, 'preview_url': preview_url}
        )

        AssignedSong.objects.filter(user=user, song=song).delete()

        user_assigned_song = AssignedSong(color=color, user=user, song=song)
        user_assigned_song.save()

        return Response({"message" : 'Route works'})


class ReAssignColor(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):
        color = request.data.get('color')
        track = request.data.get('track')
        user = request.user

        track_id = track['id']


        assigned_song = AssignedSong.objects.get(user=user, song__id=track_id)
        new_color = Color.objects.get(name=color)

        assigned_song.color = new_color
        assigned_song.save()

        print(assigned_song)


        return Response({"message" : 'Route works'})


class RemovedAssignedSong(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        track_id = request.data.get('id')
        user = request.user


        try:
            assigned_song = AssignedSong.objects.get(user=user, song__id=track_id)
            print(assigned_song)
            assigned_song.delete()

            return Response({"message": 'Assigned song removed successfully'})
        except AssignedSong.DoesNotExist:
            return Response({'detail': 'Assigned song not found for the user and track ID.'}, status=404)