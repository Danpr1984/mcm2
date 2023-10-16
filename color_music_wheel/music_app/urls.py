from django.urls import path
from . import views



urlpatterns = [
    path('color-list/', views.color_list, name='color_list'),
    path('my-view/', views.my_view, name='my_view'),
    # Add other app-specific URLs here
]
