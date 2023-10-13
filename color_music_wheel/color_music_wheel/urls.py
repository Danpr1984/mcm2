from django.contrib import admin
from django.urls import path
from music_app.views import color_list, my_view
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('colors/', color_list, name='color_list'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('my_view/', my_view, name='my_view'),  # Use the view function
]