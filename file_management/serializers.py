from .models import File
from rest_framework import serializers


class FileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = File
        fields = ["id", "url", "content_type", "file_type", "file"]
        read_only_fields = ['content_type']

    def create(self, validated_data):
        file = File(**validated_data)
        # todo set le folder de destination selon le type?
        # todo set le content type?
        # file.content_type =
        # file.file_type = "test"
        file.save()

        return file
