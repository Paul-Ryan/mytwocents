from django import forms

class SessionForm(forms.Form):
    username = forms.CharField(required=True)
    email = forms.EmailField(required=False)
    password = forms.CharField(required=True)
