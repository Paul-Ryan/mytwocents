# helper methods for the users app

def users_session_data(request):
    responseData = {
        'user': {
            'id': request.user.id,
            'username': request.user.username,
            'sessionKey': request.session.session_key,
        }
    }

    return responseData
