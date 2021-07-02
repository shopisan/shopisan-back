from django.core.management.base import BaseCommand
from store.models import Countries, Address


class Command(BaseCommand):
    help = 'Collect all countries from the stores present in the database'

    def handle(self, *args, **options):
        saved_countries = Countries.objects.all()
        country_list = []
        new_country_list = []
        for country in saved_countries:
            country_list.append(country.iso)

        new_countries_addresses = Address.objects.exclude(country__in=country_list)[:50]

        for new_country in new_countries_addresses:
            new_country_iso = new_country.country.strip()
            if new_country_iso not in new_country_list and new_country_iso not in country_list:
                country = Countries(iso=new_country_iso)
                new_country_list.append(new_country_iso)
                country.save()

        self.stdout.write(self.style.SUCCESS("Country check successful"))
