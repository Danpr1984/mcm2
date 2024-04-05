from rest_framework.views import APIView
from rest_framework import  status
from rest_framework.response import Response
from rest_framework.permissions import  IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from .serializers import  AssignedSongSerializer
from .models import AssignedSong, Color, Song


class UserSongsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        assigned_songs = request.user.user_songs.all()
        song_serializer = AssignedSongSerializer(assigned_songs, many=True)
        return Response({'user_songs': song_serializer.data}, status=status.HTTP_200_OK)

@csrf_exempt
class AssignColorToSong(APIView):
    permission_classes = [IsAuthenticated]

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
            defaults={'name': name, 'artist': artist, 'album':
                    album, 'image': image, 'preview_url': preview_url}
                    )

        AssignedSong.objects.filter(user=user, song=song).delete()

        user_assigned_song = AssignedSong(color=color, user=user, song=song)
        user_assigned_song.save()

        return Response({"message" : 'Route works'})

@csrf_exempt
class ReAssignColor(APIView):
    permission_classes = [IsAuthenticated]

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

@csrf_exempt
class RemovedAssignedSong(APIView):
    permission_classes = [IsAuthenticated]

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
