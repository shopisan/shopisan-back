from django.db import models
from store.models import Store
from file_management.models import File


class Post(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


class PostMedia(models.Model):
    post = models.ForeignKey(Post, related_name="post_media", on_delete=models.CASCADE)
    description = models.CharField(max_length=200)
    price = models.FloatField(null=True)
    media = models.ForeignKey(File, on_delete=models.CASCADE)
