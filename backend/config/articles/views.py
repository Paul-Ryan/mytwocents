from .utils import create_article #, #get_author_articles

def article(request):

    if request.method == 'POST':
        return create_article(request)


def articles_by_user_id(request, user_id):

    if request.method == 'GET':
        user = User.objects.get(pk=user_id)
        articles = user.articles
        print(articles)
