from django.urls import path, include

from . import views

urlpatterns = [
    path('session/', include('session.urls')),
    path('users/', include('users.urls')),  
    path('', views.index, name='index'),
]
