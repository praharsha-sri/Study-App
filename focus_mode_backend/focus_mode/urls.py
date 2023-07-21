from django.urls import path
from .views import TodoViewSet, FocusModeViewSet
from rest_framework.routers import SimpleRouter

app_name = 'focus_mode'

router = SimpleRouter()
router.register(r'todos', TodoViewSet)
router.register(r'focus-modes', FocusModeViewSet, basename='focus-mode')

urlpatterns = router.urls