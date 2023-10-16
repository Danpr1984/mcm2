from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from music_app.views import home
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', home, name='home'),
    path('react/', TemplateView.as_view(template_name='react.html')),
    path('admin/', admin.site.urls),
    path('colors/', include('music_app.urls')),
    path('login/', include('django.contrib.auth.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)