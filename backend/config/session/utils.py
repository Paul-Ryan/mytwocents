import json

from django.http import JsonResponse
from django.contrib.auth.models import User

import django.contrib.auth as auth
from .forms import SessionForm


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


def create_session(request):
    form = SessionForm(request.POST['user'])

    if form.is_valid():
        username = form.cleaned_data['username']
        email = form.cleaned_data['email']
        password = form.cleaned_data['password']

        user = auth.authenticate(
            request,
            username=username,
            password=password
        )

        if user:
            auth.login(request, user)

    return JsonResponse(users_session_data(request))


def delete_session(request):
    auth.logout(request)

    return JsonResponse(users_session_data(request))
