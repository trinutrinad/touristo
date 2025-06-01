from django.urls import path
from .views import RegisterView, CustomLoginView, LogoutView, UserProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', UserProfileView.as_view(), name='profile'),
]

