import json

from django.http import JsonResponse
from django.contrib.auth.models import User

from .forms import ArticleForm

def validate_non_empty_string(value):
    # This could also be done in the Article.Form. Unsure if that would be
    # better.
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


def article_data(request):
    responseData = {
        'article': {'title': request.article.title,
                    'author_id': request.user.id,}
    }
    return responseData


def create_article(request):
    if not request.user.is_authenticated:
        return

    form = ArticleForm(json.loads(request.body)['article'])

    if form.is_valid():
        title = form.cleaned_data['title']
        # How do we get the user_id for use as author_id


    return JsonResponse(article_data(request))


