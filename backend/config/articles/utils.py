import json

from django.http import JsonResponse
from django.contrib.auth.models import User

#from .forms import SessionForm
    

def article_data(request):
    responseData = {
        'article': {'title': request.article.title,
                    'author_id': 'id': request.user.id,}
    }
    return responseData


def create_article(request):
    if request.user.is_authenticated:
        pass
    
