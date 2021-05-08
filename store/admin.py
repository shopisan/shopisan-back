from django.contrib import admin

from .models import Store, StoreCategories, Address, Countries, City
from .forms import StoreForm


class AddressInline(admin.TabularInline):
    readonly_fields = ['store']
    # exclude = ('store',)
    model = Address
    extra = 0
    verbose_name_plural = "Addresses"


class StoreAdmin(admin.ModelAdmin):
    search_fields = ["name"]
    icon_name = 'store'
    # form = StoreForm

    inlines = [
        AddressInline
    ]


class StoreCategoriesAdmin(admin.ModelAdmin):
    search_fields = ["fr"]
    icon_name = 'list'


class CitiesAdmin(admin.ModelAdmin):
    search_fields = ["en", "fr"]
    verbose_name_plural = "Cities"
    list_display = ['en', 'fr', 'country']
    icon_name = 'location_on'


admin.site.register(Store, StoreAdmin)
admin.site.register(StoreCategories, StoreCategoriesAdmin)
# admin.site.register(Countries)
admin.site.register(City, CitiesAdmin)
