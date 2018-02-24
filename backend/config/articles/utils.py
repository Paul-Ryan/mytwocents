import json

from django.http import JsonResponse
from django.contrib.auth.models import User

from .forms import ArticleForm


def article_data(request):
    responseData = {
        'article': {'title': request.article.title,
                    'author_id': 'id': request.user.id,}
    }
    return responseData


def create_article(request):
    if !request.user.is_authenticated:
        return

    form = ArticleForm(json.loads(request.body)['article'])

    if form.is_valid():
        title = form.cleaned_data['title']
        # How do we get the user_id for use as author_id


    return JsonResponse(article_data(request))
