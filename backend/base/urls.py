from django.urls import path
from . import views

urlpatterns = [
	path('authenticated',views.CheckAuthenticatedView.as_view()),
    path('register', views.register_view),
    path('login', views.login_view),
    path('logout', views.logout_view),
    path('csrf_cookie', views.GetCSRFToken.as_view()),
    path('csrf', views.get_csrf, name='api-csrf'),
    path('session', views.session_view, name='api-session'),
	path('whoami', views.whoami_view),
    path('assign_color_to_song/', views.AssignColorToSong.as_view(), name='assign_color_to_song'), 
    path('reassign_color/', views.ReAssignColor.as_view(), name='reassign_color'),
    path('remove_color_song/', views.RemovedAssignedSong.as_view(), name='remove_color_song'),
    path('user_songs/', views.UserSongsView.as_view(), name='user_songs'), 
]
