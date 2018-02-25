from django.contrib.auth.models import User
from .utils import create_article, articles_data #, #get_author_articles
from django.http import JsonResponse


def article(request):

    if request.method == 'POST':
        return create_article(request)


def articles_by_user_id(request, user_id):
    if request.user.id is not user_id:
        return

    if request.method == 'GET':
        user = User.objects.get(pk=user_id)
        articles = user.article_set.all()
        print(JsonResponse(articles_data(articles)))
        return JsonResponse(articles_data(articles))
