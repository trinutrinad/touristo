from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        UserProfile.objects.create(user=user)
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['preferred_language', 'currency', 'wishlist', 'passport', 'visa']
