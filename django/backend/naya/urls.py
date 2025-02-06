from django.contrib import admin
from django.urls import path, include
from naya.views import FrontendAppView  # Import your view to serve the React app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_app.urls')),  # Include your API URLs here
    path('', FrontendAppView.as_view(), name='home'),  # Serve the React app via FrontendAppView
]
