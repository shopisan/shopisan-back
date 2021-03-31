from .models import Post, PostMedia
from rest_framework import serializers
from file_management.serializers import FileSerializer


class PostMediaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PostMedia
        fields = ["id", "media", "description", "price", "post"]
        read_only_fields = ["post"]
        extra_kwargs = {'id': {'read_only': False, 'required': True}}


class PostMediaReadSerializer(serializers.ModelSerializer):
    media = FileSerializer()

    class Meta:
        model = PostMedia
        fields = "__all__"
        read_only_fields = ["post", "media"]


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

    def update(self, instance, validated_data):
        post_media = validated_data.pop("post_media")
        post_media_dict = dict((i.id, i) for i in instance.post_media.all())
        instance.save()

        for media in post_media:
            if "id" in media and media["id"] is not None:
                post_media_obj = post_media_dict.pop(media['id'])
                post_media_obj.description = media['description']
                post_media_obj.price = media['price']
                post_media_obj.media = media['media']
                post_media_obj.save()
            else:
                PostMedia.objects.create(post=instance, **media)

        if len(post_media_dict) > 0:
            for item in post_media_dict.values():
                item.delete()

        instance.save()
        return instance


class PostReadSerializer(serializers.HyperlinkedModelSerializer):
    post_media = PostMediaReadSerializer(many=True)

    class Meta:
        model = Post
        # fields = "__all__"
        fields = ["id", "url", "post_media", "created", "store"]
        read_only_fields = ['id']

    # def create(self, validated_data):
    #     pass
