from django.urls import path, include

urlpatterns = [
    path('', views.article, name="article"),
    path('<int:id>', views.article_by_id, name="article_by_id"),
]
