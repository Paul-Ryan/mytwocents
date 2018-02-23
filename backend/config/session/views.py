from util .import create_session, delete_session

def session(request):
    if request.method == 'POST' and not request.user.is_authenticated:
        return create_session(request)


    if request.method == 'DELETE':
        return delete_session(request)
