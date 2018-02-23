from django import ModelForm

import Article from articles

class ArticlesForm(ModelForm):

    class Meta:
        model = Article
        fields = ["title"]
