from django.urls import path
from . import views

urlpatterns = [
	path('authenticated',views.CheckAuthenticatedView.as_view()),
    path('register', views.SignupView.as_view()),
    path('login', views.login_view),
    path('csrf_cookie', views.GetCSRFToken.as_view()),
    path('csrf', views.get_csrf, name='api-csrf'),
    path('session', views.session_view, name='api-session'),
	path('whoami', views.whoami_view),
    path('assign_color_to_song/', views.AssignColorToSong.as_view(), name='assign_color_to_song'), 
    path('user_songs/', views.UserSongsView.as_view(), name='user_songs'), 


]
