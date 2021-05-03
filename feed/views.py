from django.contrib.auth.models import AnonymousUser
from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .permissions import IsPostOwnerOrAdminOrReadOnly
from .models import Post, PostMedia
from .serializers import PostSerializer, PostMediaSerializer, PostReadSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsPostOwnerOrAdminOrReadOnly]

    def get_serializer_class(self):
        if self.action == 'list':
            return PostReadSerializer
        if self.action == 'retrieve':
            return PostReadSerializer
        # ici ce sont les write (delete, update, create)
        return PostSerializer


class PostMediaViewSet(viewsets.ModelViewSet):
    queryset = PostMedia.objects.all()
    serializer_class = PostMediaSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PostByStore(generics.ListAPIView):
    serializer_class = PostReadSerializer

    def get_queryset(self):
        store = self.kwargs['store']
        return Post.objects.filter(store=store)


@api_view(["GET"])
def get_posts_by_owned_stores(request):
    if isinstance(request.user, AnonymousUser):
        return Response()
    stores = request.user.profile.owned_stores.all()
    posts = Post.objects.filter(store__in=stores).order_by('-created')
    serializer = PostReadSerializer(instance=posts, many=True, context={'request': request})
    return Response(serializer.data)
