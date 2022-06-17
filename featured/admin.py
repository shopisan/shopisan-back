from django.contrib import admin

from featured.models import Influencer, Code


class InfluencerAdmin(admin.ModelAdmin):
    icon_name = 'person'
    exclude = ('codes',)
    list_display = ['name']
    search_fields = ['name']

    # inlines = [
    #     ProfileInline
    # ]


class CodesAdmin(admin.ModelAdmin):
    icon_name = 'qr_code'
    # exclude = ('codes',)
    list_display = ['code', "is_active", "influencer"]
    search_fields = ['name', 'influencer__name']
    autocomplete_fields = ['influencer', 'featured_stores', 'users']

    # inlines = [
    #     ProfileInline
    # ]


admin.site.register(Influencer, InfluencerAdmin)
admin.site.register(Code, CodesAdmin)
