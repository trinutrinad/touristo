from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile_users')
    language = models.CharField(max_length=50, blank=True)
    currency = models.CharField(max_length=10, blank=True)
    wishlist = models.TextField(blank=True)  # Comma-separated item names or IDs
    passport = models.FileField(upload_to='documents/', blank=True, null=True)
    visa = models.FileField(upload_to='documents/', blank=True, null=True)

    def __str__(self):
        return self.user.username
