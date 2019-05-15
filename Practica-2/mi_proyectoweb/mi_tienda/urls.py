from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home_view),
    url(r'^index', views.home_view),
    url(r'^art(\d{2})$', views.products),
    url(r'^list', views.list),
    url(r'^vertical', views.vertical),
    url(r'^cuadrados', views.cuadrados),
    url(r'^pared', views.pared),
]
