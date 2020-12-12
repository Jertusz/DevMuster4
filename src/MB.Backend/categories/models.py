from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=255)


class SubCategory(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(to=Category, on_delete=models.SET_NULL, blank=True, null=True)
