# api_app/serializers.py
from rest_framework import serializers
from .models import YourModel  # Replace with your actual model

class YourModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = YourModel  # Replace with your model name
        fields = '__all__'  # List the fields you want to include
