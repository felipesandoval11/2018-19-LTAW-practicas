from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^index', views.home_view),
    url(r'^art1', views.products),
    url(r'^list', views.list),
]
