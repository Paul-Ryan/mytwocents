from .utils import create_article #, #get_author_articles

def article(request):

    if request.method == 'POST':
        return create_article(request)

    if request.method == 'GET':
        # Should get all the articles of the user, right?
        return articles_by_user_id(request, user_id)

    # Django really doesn't like None as a return. What to return if there is
    # no matching request.method? On the one hand, if frontend sends
    # request.method == 'PATCH' (or, even worse, if it *can* be sent,
    # request.method == 'FOOBAR'), that's their fault. But, we should arrange
    # to fail gracefully.


def article_by_user_id(request, user_id):

    if request.method == 'GET':
        user = User.objects.get(pk=user_id)
        articles = user.articles
        print(articles)
