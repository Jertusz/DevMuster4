from rest_framework import serializers
from .models import Exercise
from .models import Solution
from .models import SolvedExercise


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
            "correct_solution"
        ]


class ExerciseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = [
            "name",
            "problem",
        ]


class SolutionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = "__all__"


class SolvedExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolvedExercise
        fields = "__all__"
