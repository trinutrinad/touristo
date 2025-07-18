# Generated by Django 5.2.1 on 2025-06-01 17:15

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_accounts', '0002_alter_userprofile_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='passport',
            field=models.FileField(blank=True, null=True, upload_to='documents/passports/'),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='visa',
            field=models.FileField(blank=True, null=True, upload_to='documents/visas/'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
