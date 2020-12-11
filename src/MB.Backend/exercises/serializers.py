from rest_framework import serializers
from .models import Exercise


class ExerciseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = "__all__"


class ExerciseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = "__all__"
        # fields = [
        #     "name",
        #     "problem",
        # ]
