from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import RegisterSerializer, UserSerializer, UserProfileSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key})
        return Response(serializer.errors, status=400)

class CustomLoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key})

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({'message': 'Logged out successfully'})

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request):
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request):
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Profile updated'})
        return Response(serializer.errors, status=400)
