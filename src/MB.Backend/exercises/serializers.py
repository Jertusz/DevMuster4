from rest_framework import serializers
from .models import Exercise
from .models import Solution
from .models import SolvedExercise
from .models import ExerciseRating


class ExerciseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = [
            "name",
            "problem",
            "difficulty",
            "solution_a",
            "solution_b",
            "solution_c",
            "solution_d",
            "solution_steps",
            "validated"
        ]


class CreateExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = [
            "name",
            "problem",
            "difficulty",
            "subcategory",
            "solution_a",
            "solution_b",
            "solution_c",
            "solution_d",
            "solution_steps",
            "correct_solution",
            "validated"
        ]


class ExerciseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = [
            "name",
            "problem",
            "subcategory",
            "difficulty",
        ]


class SolutionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = "__all__"


class SolvedExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolvedExercise
        fields = "__all__"


class ExerciseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseRating
        fields = "__all__"
