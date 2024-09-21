from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.generic import TemplateView

app_name = 'isimm'

urlpatterns = [
    path("", TemplateView.as_view(template_name="isimm/index.html")),
]

# Add this for serving static files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
