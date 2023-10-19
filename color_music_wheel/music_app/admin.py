from django.contrib import admin
from .models import AppUser, Song, Color

admin.site.register(AppUser)
admin.site.register(Song)
admin.site.register(Color)
