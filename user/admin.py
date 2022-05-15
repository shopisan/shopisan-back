import csv
import datetime
import io

from django.contrib import admin
from django.contrib.auth.models import Group
from django.http import FileResponse, HttpResponse
from reportlab.pdfgen import canvas

from . import models
from .models import User, Profile


class ProfileInline(admin.TabularInline):
    exclude = ('favourite_stores', 'picture')
    model = models.Profile
    extra = 0


class UserAdmin(admin.ModelAdmin):
    @admin.action(description='Générer un fichier PDF')
    def generatePDF(modeladmin, request, queryset):
        date = datetime.datetime.now()
        buffer = io.BytesIO()
        x = canvas.Canvas(buffer)
        meta = modeladmin.model._meta
        field_names = [field.name for field in meta.fields]

        meta_profile = Profile._meta
        field_names_profile = [field.name for field in meta_profile.fields]

        exclusions = ["password", "reset_password_token", "reset_password_validity", "user", "id", "picture",
                      "last_login", "is_active", "is_admin", "is_owner"]

        # A4 dimensions in points: 595 × 842 points

        for obj in queryset:
            y = 800
            margin_left = 40
            x.setFont("Helvetica", 20)
            x.drawCentredString(595/2, y, obj.email)
            y = y - 40

            if obj.profile.picture is not None:
                y = y - 250
                x.drawImage(obj.profile.picture.file.url, (595 - 250) / 2, y, 250, 250)
                y = y - 40

            for field in field_names_profile:
                if field not in exclusions:
                    x.setFont("Helvetica", 12)
                    x.drawString(margin_left, y, field + ": " + getattr(obj.profile, field).__str__())
                    y = y - (12 * 1.5)

            for field in field_names:
                if field not in exclusions:
                    x.setFont("Helvetica", 12)
                    x.drawString(margin_left, y, field + ": " + getattr(obj, field).__str__())
                    y = y - (12 * 1.4)

            x.setFont("Helvetica", 7)

            x.drawRightString(575, 10, "Shopisan data export for " + obj.email + " " + date.strftime("%Y-%m-%d"))

            x.showPage()

        x.save()
        buffer.seek(0)
        return FileResponse(buffer, as_attachment=True, 
                            filename=f"Shopisan_data_export_{date.strftime('%Y_%m_%d')}.pdf")

    @admin.action(description='Générer un fichier CSV')
    def generate_csv(modeladmin, request, queryset):
        date = datetime.datetime.now()
        response = HttpResponse(
            content_type='text/csv',
            headers={'Content-Disposition':
                         f"attachment; filename=\"Shopisan_CSV_Data_Export_{date.strftime('%Y_%m_%d')}.csv\""},
        )

        profile_fields = ["name", "surname", "date_of_birth"]
        user_fields = ["username", "email", "created"]
        fields = profile_fields + user_fields

        fields_formatted = []
        for field in fields:
            fields_formatted.append(field.replace("_", " ").capitalize())

        writer = csv.writer(response)
        writer.writerow(fields_formatted)

        for obj in queryset:
            values = []
            for field in fields:
                if field in profile_fields:
                    values.append(getattr(obj.profile, field).__str__())
                else:
                    values.append(getattr(obj, field).__str__())

            writer.writerow(values)

        return response

    actions = [generatePDF, generate_csv]
    icon_name = 'person'
    exclude = ('password',)
    list_display = ['email', 'username', 'profile']
    search_fields = ['email', 'username', 'profile__name', 'profile__surname']

    inlines = [
        ProfileInline
    ]


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
