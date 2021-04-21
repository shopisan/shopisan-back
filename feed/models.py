from django.db import models
from django.utils.safestring import mark_safe

from store.models import Store
from file_management.models import File


class Post(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    objects = models.Manager()


class PostMedia(models.Model):
    post = models.ForeignKey(Post, related_name="post_media", on_delete=models.CASCADE)
    description_fr = models.CharField(max_length=200, blank=True, null=True)
    description_en = models.CharField(max_length=200, blank=True, null=True)
    price = models.FloatField(null=True, blank=True)
    media = models.ForeignKey(File, on_delete=models.CASCADE)

    objects = models.Manager()

    @property
    def media_tag(self):
        return mark_safe('<img src="%s" width="150" height="150" />' % self.media.file.url)
