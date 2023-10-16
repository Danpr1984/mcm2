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
from django.views.generic.base import TemplateView


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