from django.db import models


class File(models.Model):
    file_type = models.CharField(max_length=100, default='')
    content_type = models.CharField(max_length=100, default='')
    file = models.FileField(max_length=None, upload_to='uploads/')

    class Meta:
        ordering = ['id', 'file_type', 'content_type', 'file']
