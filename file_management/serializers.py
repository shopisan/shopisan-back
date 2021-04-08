from .models import File
from rest_framework import serializers
from PIL import Image
from django.core.files.storage import default_storage
from io import BytesIO


class FileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = File
        fields = ["id", "url", "content_type", "file_type", "file"]
        read_only_fields = ['content_type']

    def create(self, validated_data):
        file = File(**validated_data)
        file.save()

        mem_file = BytesIO()
        thumbnail_image = Image.open(file.file)
        thumbnail_image.thumbnail((1200, 1200))
        thumbnail_image.save(mem_file, 'JPEG')
        default_storage.save(file.file.name, mem_file)

        mem_file.close()
        thumbnail_image.close()

        return file
