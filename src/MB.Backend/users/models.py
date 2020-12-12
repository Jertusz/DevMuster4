from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    has_changed_password = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    points = models.IntegerField(default=0)
