from django import forms

class UserForm(forms.Form):
    username = forms.CharField(min_length=3, required=True)
    email = forms.EmailField(required=False)
    password = forms.CharField(min_length=6, required=True)
