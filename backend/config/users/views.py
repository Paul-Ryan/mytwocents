from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User

import django.contrib.auth as auth

from .utils import users_session_data
from .forms import UserForm, SessionForm

import json

# Create your views here.

def index(request):
    return HttpResponse("Hey users index works")


def create(request):
    user = json.loads(request.body)['user']

    if request.method == 'POST' and not request.user.is_authenticated:
        form = UserForm(user)

        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            user = User.objects.create_user(
                username=username,
                email=email,
                password=password
            )

            user.save()
            auth.login(request, user)

    return JsonResponse(users_session_data(request))


def login(request):
    if request.method == 'POST' and not request.user.is_authenticated:
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


def logout(request):
    auth.logout(request)

    return JsonResponse(users_session_data(request))
