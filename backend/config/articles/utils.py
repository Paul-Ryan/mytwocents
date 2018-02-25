import json

from django.http import JsonResponse
from django.contrib.auth.models import User

from .forms import ArticleForm

def validate_non_empty_string(value):
    try:
        value += ''
        if value.length == 0:
            raise ValidationError(
                ('%(value)s must be a non-empty string'),
                params={'value': value})
    except TypeError:
        raise ValidationError(
            ('%(value)s is not a string'),
            params={'value': value})


def create_article(request):
    if not request.user.is_authenticated:
        return

    data = json.loads(request.body)['article']
    data['author'] = request.user.id
    form = ArticleForm(data)

    if form.is_valid():
        form.save()
        return JsonResponse({'article': data})


def articles_data(articles):
    articles_dict = {}

    for article in articles:
        articles_dict[article.id] = {
            "id": article.id,
            "title": article.title,
        }

    return {"articles": articles_dict}
