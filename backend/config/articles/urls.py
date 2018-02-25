from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.article, name="article"),
    path('user/<int:user_id>', views.articles_by_user_id, name="articles_by_user_id"),
    path('<int:id>', views.article_by_id, name="article_by_id"),
]
