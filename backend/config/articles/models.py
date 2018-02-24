from django.db import models
from django.contrib.auth.models import User

from django.core.exceptions import ValidationError

from .validators import validate_non_empty_string



class Article(models.Model):

    author_id = models.ForeignKey(User, on_delete=models.PROTECT)
    title = models.TextField(validators=[validate_non_empty_string])


    class Meta:
        unique_together = (('author_id', 'title'),)

    def __str__(self):
        """A string representation of the model."""
        return self.title
