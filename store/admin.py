from django.contrib import admin

from .models import Store, StoreCategories, Address
from .forms import StoreForm


class AddressInline(admin.TabularInline):
    readonly_fields = ['store']
    # exclude = ('store',)
    model = Address
    extra = 0
    verbose_name_plural = "Addresses"


class StoreAdmin(admin.ModelAdmin):
    search_fields = ["name"]
    # form = StoreForm

    inlines = [
        AddressInline
    ]


class StoreCategoriesAdmin(admin.ModelAdmin):
    search_fields = ["fr"]


admin.site.register(Store, StoreAdmin)
admin.site.register(StoreCategories, StoreCategoriesAdmin)
# admin.site.register(Countries)
