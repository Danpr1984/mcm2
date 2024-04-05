from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Song, AssignedSong


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('id', 'name', 'artist', 'album', 'image', 'preview_url')


class AssignedSongSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssignedSong
        fields = ('song', 'color')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['song'] = {
            'id': instance.song.id,
            'name': instance.song.name,
            'artist': instance.song.artist,
            'album': instance.song.album,
            'image': instance.song.image,
            'preview_url': instance.song.preview_url,
            # Add more fields as needed
        }
        representation['color'] = instance.color.name

        return representation