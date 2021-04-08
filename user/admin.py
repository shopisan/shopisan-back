from django.contrib import admin
from django.contrib.auth.models import Group
from rest_framework.authtoken.models import TokenProxy
from . import models
from .models import User


class ProfileInline(admin.TabularInline):
    exclude = ('favourite_stores', 'picture')
    model = models.Profile
    extra = 0


class UserAdmin(admin.ModelAdmin):
    icon_name = 'person'
    exclude = ('password',)
    list_display = ['username', 'email', 'profile']

    inlines = [
        ProfileInline
    ]


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)

