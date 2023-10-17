from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from music_app.views import home, react_view

urlpatterns = [
    path('', home, name='home'),  # This is a project-wide URL
    path('react/', react_view, name='react'),  # This is also project-wide
    path('admin/', admin.site.urls),
    path('colors/', include('music_app.urls')),
    path('login/', include('django.contrib.auth.urls')),  # Including Django's built-in auth URLs
    # Add any other project-wide URL patterns here
]
