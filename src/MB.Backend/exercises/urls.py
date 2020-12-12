from django.urls import path

from . import views

urlpatterns = [
    path("<int:pk>/", views.ExerciseDetails.as_view()),
    path("<int:pk>/solution/", views.SolutionDetail.as_view()),
    path("<int:pk>/solution/add/", views.CreateSolution.as_view()),
    path("create/", views.CreateExercise.as_view()),
    path("list/", views.ExerciseList.as_view()),
    path("list/<int:pk>/", views.ExerciseBySubCategory.as_view()),
    path("list/solved/", views.SolvedExercisesList.as_view()),
]