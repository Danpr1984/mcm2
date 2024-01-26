"""Models"""
# pylint: disable=E1101

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Color(models.Model):
    name = models.CharField(max_length=50)
    hex_code = models.CharField(max_length=7, default='#000000')

    def __str__(self):
        return str(self.name)

class Song(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    album = models.CharField(max_length=100)
    image = models.URLField()
    preview_url = models.URLField(null=True)

    def __str__(self):
        return str(self.name)


class AssignedSong(models.Model):
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, related_name="user_songs")

    def __str__(self):
        return f"{self.song.name}"
