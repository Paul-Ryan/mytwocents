from .utils import create_session, delete_session, session_data

def session(request):
    if request.method == 'POST':
        delete_session(request)
        return create_session(request)


    if request.method == 'DELETE':
        return delete_session(request)

    return session_data(request)
