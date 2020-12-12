from django.db import models
from categories.models import SubCategory
from datetime import date
from users.models import User

# Create your models here.


class Solution(models.Model):
    solution = models.CharField(max_length=500)


class Exercise(models.Model):
    DIFFICULTY_CHOICES = [
        ("E", "Easy"),
        ("M", "Medium"),
        ("H", "Hard"),
    ]

    name = models.CharField(max_length=500)
    problem = models.CharField(max_length=500, blank=False)
    difficulty = models.CharField(max_length=1, choices=DIFFICULTY_CHOICES, blank=True)
    subcategory = models.ForeignKey(to=SubCategory, on_delete=models.SET_NULL, null=True, blank=True)

    solution_a = models.CharField(max_length=500, blank=True)
    solution_b = models.CharField(max_length=500, blank=True)
    solution_c = models.CharField(max_length=500, blank=True)
    solution_d = models.CharField(max_length=500, blank=True)

    correct_solution = models.CharField(max_length=500, blank=True)
    validated = models.BooleanField(default=True)
    solution_steps = models.ForeignKey(to=Solution, on_delete=models.SET_NULL, null=True, blank=True)

    def __repr__(self):
        return f"{self.name} | {self.problem}"

    def __str__(self):
        return f"{self.name} | {self.problem}"



class SolvedExercise(models.Model):
    exercise = models.ForeignKey(to=Exercise, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateField(default=date.today)
    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True, blank=True)
