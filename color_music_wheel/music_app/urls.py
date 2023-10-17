from django.urls import path
from . import views

app_name = 'music_app'

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('login/', views.login_view, name='login'),
    path('color_list/', views.color_list, name='color_list'),
    path('my_view/', views.my_view, name='my_view'),
    # Add any other app-specific URL patterns you need
]
