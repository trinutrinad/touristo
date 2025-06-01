from rest_framework.views import APIView
from rest_framework.response import Response

class HelloView(APIView):
    def get(self, request):
        return Response({"message": "Hello, Touristo!"})

# Add this ExampleView to fix the AttributeError
class ExampleView(APIView):
    def get(self, request):
        return Response({"message": "Example view working!"})
