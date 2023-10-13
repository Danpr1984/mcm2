from django.contrib import admin
from django.urls import path
from music_app.views import color_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('colors/', color_list, name='color_list'),
]