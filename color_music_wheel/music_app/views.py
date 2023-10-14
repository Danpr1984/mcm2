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
    my_model_data = MyModel.objects.all()
    context = {'my_model_data': my_model_data}
    return render(request, 'home.html', context)

class MyView(TemplateView):
    template_name = 'my_template.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Add any additional context data here
        return context