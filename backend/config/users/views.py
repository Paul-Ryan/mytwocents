from django.shortcuts import render

from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("Hey users index works")

def create(request):
    return HttpResponse("Hey users create works")

def login(request):
    return HttpResponse("Hey users login works")

def logout(request):
    return HttpResponse("Hey users logout works")
