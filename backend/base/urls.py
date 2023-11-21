from django.urls import path
from . import views

urlpatterns = [
	path('authenticated',views.CheckAuthenticatedView.as_view()),
    path('register', views.SignupView.as_view()),
    path('login', views.LoginView.as_view()),
    path('csrf_cookie', views.GetCSRFToken.as_view()),
	path('user/', views.UserView.as_view()),
    path('assign_color_to_song/', views.AssignColorToSong.as_view(), name='assign_color_to_song'),  
]
