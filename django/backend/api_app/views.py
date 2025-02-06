# api_app/views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def example_view(request):
    data = {'message': 'Hello from Django!'}
    return Response(data)
