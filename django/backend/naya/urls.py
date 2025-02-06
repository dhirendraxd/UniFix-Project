from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_app.urls')),  # Include your API URLs here
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),  # Serve the React app
]
