from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Color
from .serializers import ColorSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def color_list(request):
    colors = Color.objects.filter(user=request.user)
    serializer = ColorSerializer(colors, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)