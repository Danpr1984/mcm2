from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse

class MyViewTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass'
        )

    def test_my_view(self):
        url = reverse('my_view')
        response = self.client.get(url)
        self.assertRedirects(response, reverse('login') + '?next=' + url)

        # Log in the user and make sure the view returns a 200 status code
        self.client.login(username='testuser', password='testpass')
        response = self.client.get(reverse('my_view'))
        self.assertEqual(response.status_code, 200)