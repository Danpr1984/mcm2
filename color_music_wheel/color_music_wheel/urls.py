from django.contrib import admin
from django.urls import path
from music_app.views import color_list, my_view, MyView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', my_view, name='home'),
    path('admin/', admin.site.urls),
    path('colors/', color_list, name='color_list'),
    path('my-view/', MyView.as_view(), name='my_view'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('my_view/', my_view, name='my_view'),
]