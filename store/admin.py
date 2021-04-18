from django.contrib import admin

from .models import Store, StoreCategories, Countries


class StoreAdmin(admin.ModelAdmin):
    search_fields = ["name"]


class StoreCategoriesAdmin(admin.ModelAdmin):
    search_fields = ["fr"]


admin.site.register(Store, StoreAdmin)
admin.site.register(StoreCategories, StoreCategoriesAdmin)
# admin.site.register(Countries)
