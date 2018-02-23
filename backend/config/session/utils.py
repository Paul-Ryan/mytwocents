# Copy and pasted from user/utils.py because of intransigence

def users_session_data(request):
    responseData = {
        'user': {
            'id': request.user.id,
            'username': request.user.username,
            'sessionKey': request.session.session_key,
        }
    }

    return responseData
