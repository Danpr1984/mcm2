from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Color
from .serializers import ColorSerializer
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from .models import MyModel
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        if password1 != password2:
            return JsonResponse({'success': False, 'errors': {'password2': 'Passwords do not match'}})
        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'errors': {'username': 'Username already exists'}})
        user = User.objects.create_user(username=username, password=password1)
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Invalid username or password'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def color_list(request):
    colors = Color.objects.filter(user=request.user)
    serializer = ColorSerializer(colors, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@login_required
def my_view(request):
    if not request.user.is_authenticated:
        return redirect(reverse('login') + '?next=' + request.path)
    else:
        # Your view logic here
        return render(request, 'my_template.html')

def home(request):
    return render(request, 'home.html')


def react_view(request):
    context = {
        'foo': 'bar',
    }
    return render(request, 'react_template.html', context)