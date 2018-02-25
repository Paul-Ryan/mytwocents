from django.http import JsonResponse
from django.contrib.auth.models import User

import django.contrib.auth as auth

from .utils import users_session_data
from .forms import UserForm

import json


def users(request):
    user = json.loads(request.body)['user']

    if request.method == 'POST' and not request.user.is_authenticated:
        form = UserForm(user)

        if form.is_valid():
            auth.login(request, form.save())

    return JsonResponse(users_session_data(request))
