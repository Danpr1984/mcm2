from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('register/', views.UserRegister.as_view(), name='register'),
    path('login/', views.UserLogin.as_view(), name='login'),
    path('logout/', views.UserLogout.as_view(), name='logout'),
    path('user/', views.UserView.as_view(), name='detail'),
    path('colors/', views.color_list, name='colors'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)