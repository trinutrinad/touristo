from django.urls import path, include
from .views import ExampleView, HelloView

urlpatterns = [
    path('example/', ExampleView.as_view(), name='example'),
    path('hello/', HelloView.as_view(), name='hello'),

    # Add user-related endpoints
    path('user/', include('user_accounts.urls')),
]
