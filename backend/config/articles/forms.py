from django.forms import ModelForm

from .validators import validate_non_empty_string

import articles

class ArticlesForm(ModelForm):
    title = forms.TextField(validators=[validate_non_empty_string])
    
    class Meta:
        model = articles.models.Article
        fields = ["title"]
        
