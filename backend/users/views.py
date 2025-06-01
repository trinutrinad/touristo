from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth.decorators import login_required

def signup_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = User.objects.create_user(username=email, email=email, password=password)
        return redirect('login')
    return render(request, 'users/signup.html')

def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user:
            login(request, user)
            return redirect('profile')
        else:
            return render(request, 'users/login.html', {'error': 'Invalid credentials'})
    return render(request, 'users/login.html')

def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def profile_view(request):
    user_profile = request.user.userprofile
    if request.method == 'POST':
        user_profile.language = request.POST['language']
        user_profile.currency = request.POST['currency']
        user_profile.wishlist = request.POST['wishlist']
        if 'passport' in request.FILES:
            user_profile.passport = request.FILES['passport']
        if 'visa' in request.FILES:
            user_profile.visa = request.FILES['visa']
        user_profile.save()
    return render(request, 'users/profile.html', {'profile': user_profile})
