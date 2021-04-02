from rest_framework import viewsets, generics
from rest_framework import permissions

from .models import Post, PostMedia
from .serializers import PostSerializer, PostMediaSerializer, PostReadSerializer, PostMediaReadSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

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
