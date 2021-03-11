from django.db import models


class File(models.Model):
    file_type = models.CharField(max_length=100, default='')
    file_url = models.CharField(max_length=255, default='')

    class Meta:
        ordering = ['id', 'file_type', 'file_url']
