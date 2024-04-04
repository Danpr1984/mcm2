from django.urls import path
from . import views

urlpatterns = [
    path('assign_color_to_song/', views.AssignColorToSong.as_view(), name='assign_color_to_song'),
    path('reassign_color/', views.ReAssignColor.as_view(), name='reassign_color'),
    path('remove_color_song/', views.RemovedAssignedSong.as_view(), name='remove_color_song'),
    path('user_songs/', views.UserSongsView.as_view(), name='user_songs'),
]
