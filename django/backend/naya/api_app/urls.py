from django.urls import path
from .views import MyApiView

urlpatterns = [
    # Other URLs...
    path('api/myendpoint/', MyApiView.as_view(), name='my_api'),
]
