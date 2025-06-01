from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    preferred_language = models.CharField(max_length=20, default='English')
    currency = models.CharField(max_length=10, default='INR')
    wishlist = models.TextField(blank=True)
    passport = models.FileField(upload_to='documents/passports/', blank=True, null=True)
    visa = models.FileField(upload_to='documents/visas/', blank=True, null=True)

    def __str__(self):
        return self.user.username
