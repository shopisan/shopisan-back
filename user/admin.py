from django.contrib import admin
from . import models
from .models import User


class ProfileInline(admin.TabularInline):
    model = models.Profile
    extra = 0


class UserAdmin(admin.ModelAdmin):
    inlines = [
        ProfileInline
    ]


admin.site.register(User, UserAdmin)

