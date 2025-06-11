from django.urls import path
from .views import login, register, attractions

urlpatterns = [
    path('login/', login, name='login'),
    path('register/', register, name='register'),
    path('attractions/', attractions, name='attractions'),
]