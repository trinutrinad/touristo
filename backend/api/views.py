from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, get_user_model
from rest_framework.authtoken.models import Token

User = get_user_model()

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(request, email=email, password=password)  # Note: using email now
    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        return Response({'message': 'Login successful', 'token': token.key}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def register(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=email, email=email, password=password)
    return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def attractions(request):
    destination = request.query_params.get('destination', 'Paris')
    attractions_data = {
        'Paris': ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
        'New York': ['Statue of Liberty', 'Times Square', 'Central Park'],
        'Tokyo': ['Tokyo Tower', 'Shibuya Crossing', 'Senso-ji Temple'],
        'London': ['Big Ben', 'British Museum', 'Tower of London'],
    }
    return Response({'attractions': attractions_data.get(destination, [])})
