from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    
    author_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(
    )

    
    class Meta:
        unique_together = (('author_id', 'title'),)

    def __str__(self):
        """A string representation of the model."""
        return self.title

