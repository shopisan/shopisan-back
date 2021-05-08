from django.contrib import admin

from .models import Post, PostMedia


class PostMediaInline(admin.TabularInline):
    readonly_fields = ['media_tag']
    exclude = ('favourite_stores',)
    model = PostMedia
    extra = 0


class PostAdmin(admin.ModelAdmin):
    list_display = ['store', 'created']
    icon_name = 'art_track'

    inlines = [
        PostMediaInline
    ]


admin.site.register(Post, PostAdmin)
