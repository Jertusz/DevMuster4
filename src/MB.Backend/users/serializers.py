from rest_framework import serializers
from .models import User


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "username",
            "password",
            "email",
            "first_name",
            "last_name",
            "is_admin",
            "has_changed_password",
            "is_active",
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "points",
        ]