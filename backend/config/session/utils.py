import json

from django.http import JsonResponse
from django.contrib.auth.models import User

import django.contrib.auth as auth
from .forms import SessionForm


# Copy and pasted from user/utils.py because of intransigence

def session_data(request):
    responseData = {
        'user': {
            'id': request.user.id,
            'username': request.user.username,
            'sessionKey': request.session.session_key,
        }
    }

    return responseData

def add_access_control(response):
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"

        return response

def create_session(request):
    form = SessionForm(json.loads(request.body)['user'])

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

    return add_access_control(JsonResponse(session_data(request)))


def delete_session(request):
    auth.logout(request)

    return JsonResponse(session_data(request))
