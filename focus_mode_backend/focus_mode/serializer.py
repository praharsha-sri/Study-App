from rest_framework import serializers
from .models import *

class FocusModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FocusMode
        fields = '__all__'

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'