# naya/urls.py
from django.contrib import admin
from django.urls import path, include  # Include to reference other app URLs

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_app.urls')),  # Add your app's URLs here
]
