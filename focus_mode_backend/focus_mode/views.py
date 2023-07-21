from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *

class FocusModeViewSet(viewsets.ModelViewSet):
    queryset = FocusMode.objects.all()
    serializer_class = FocusModeSerializer

class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
