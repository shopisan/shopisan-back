from django.contrib import admin

from .models import Post, PostMedia


class PostMediaInline(admin.TabularInline):
    exclude = ('favourite_stores', 'picture')
    model = PostMedia
    extra = 0


class PostAdmin(admin.ModelAdmin):
    list_display = ['store', 'created']

    inlines = [
        PostMediaInline
    ]


admin.site.register(Post, PostAdmin)
