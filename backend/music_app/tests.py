from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from .models import Color
from .serializers import ColorSerializer
from django.contrib.auth.models import User
class MyViewTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_my_view_authenticated(self):
        # Log in the user
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass'
        )
        self.client.login(username='testuser', password='testpass')

        url = reverse('my_view')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_my_view_unauthenticated(self):
        url = reverse('my_view')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 302)  # Expect a redirect for unauthenticated users

class ColorListTestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass'
        )
        self.client.force_authenticate(user=self.user)
        Color.objects.create(name='red', hex_code='#FF0000', user=self.user)
        Color.objects.create(name='green', hex_code='#00FF00', user=self.user)

    def test_color_list(self):
        url = reverse('color_list')
        response = self.client.get(url)
        colors = Color.objects.all()
        serializer = ColorSerializer(colors, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class LoginViewTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_login_success(self):
        response = self.client.post(reverse('login'), {'username': 'testuser', 'password': 'testpass'})
        self.assertEqual(response.status_code, 302)  # Successful login should redirect

    def test_login_failure(self):
        response = self.client.post(reverse('login'), {'username': 'testuser', 'password': 'wrongpass'})
        self.assertEqual(response.status_code, 200)  # Failed login should stay on the login page
