from django.shortcuts import render

def article(request):

    if request.method == 'POST':
        return create_article(request)

    if request.method == 'GET':
        # Should get all the articles of the user, right?
        pass

    # Django really doesn't like None as a return. What to return if there is
    # no matching request.method? On the one hand, if frontend sends
    # request.method == 'PATCH' (or, even worse, if it *can* be sent,
    # request.method == 'FOOBAR'), that's their fault. But, we should arrange
    # to fail gracefully.


def article_by_id(request):

    if request.method == 'GET':
        # This method should fetch the particular article. Do we need?
        pass


    # Again, what to use in place of None, here?
