from django.test import RequestFactory

from test_plus.test import TestCase
from ..forms import UserForm
from ..models import User


class UserformTestCase(TestCase):
    def test_record_is_created(self):
        self.assertEqual(User.objects.count(), 0)
        form = UserForm({
            'email': "gbozee@example.com",
            'name': "John Doe",
            "number": "08033008232",
            "location": "Ibadan"
        })
        self.assertTrue(form.is_valid())
        result = form.save()
        self.assertEqual(User.objects.count(), 1)
