from django.urls import path
from . import views #import views


# adding url
urlpatterns = [
    path('password_gen', views.generate_password, name='generate_password'), #password_genrate
]