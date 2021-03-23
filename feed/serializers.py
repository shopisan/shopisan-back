from .models import Post, PostMedia
from rest_framework import serializers
from file_management.serializers import FileSerializer


class PostMediaSerializer(serializers.ModelSerializer):
    media = FileSerializer()

    class Meta:
        model = PostMedia
        fields = "__all__"
        read_only_fields = ["post"]


class PostSerializer(serializers.HyperlinkedModelSerializer):
    post_media = PostMediaSerializer(many=True)

    class Meta:
        model = Post
        fields = "__all__"

    def create(self, validated_data):
        post_media = validated_data.pop("post_media")
        post = Post(**validated_data)
        post.save()

        for media in post_media:
            post_media_obj = PostMedia(**media)
            post_media_obj.post = post
            post_media_obj.save()

        return post
