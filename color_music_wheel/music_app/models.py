from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Color(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Song(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    colors = models.ManyToManyField(Color)
from django.contrib.auth.models import User

class UserColorMusic(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    music = models.ManyToManyField(Song)

    def __str__(self):
        return f'{self.user.username} - {self.color.name}'