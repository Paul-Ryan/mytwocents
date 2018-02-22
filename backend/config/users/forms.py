from django.forms import ModelForm
from django import forms

from django.contrib.auth.models import User


class UserForm(ModelForm):

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class SessionForm(forms.Form):
    username = forms.CharField(required=True)
    email = forms.EmailField(required=False)
    password = forms.CharField(required=True)
