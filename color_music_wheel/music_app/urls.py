from django.urls import path
from . import views

app_name = 'music_app'

urlpatterns = [
    path('color_list/', views.color_list, name='color_list'),
    # Add any other URL patterns for the music_app app here
]