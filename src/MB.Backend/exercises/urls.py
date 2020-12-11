from django.urls import path

from . import views

urlpatterns = [
    path("<int:pk>/", views.ExerciseDetails.as_view()),
    path("create/", views.CreateExercise.as_view()),
    path("list/", views.ExerciseList.as_view())
]