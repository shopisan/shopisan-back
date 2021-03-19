from django.core.management.base import BaseCommand, CommandError
from store.models import StoreCategories, Store
from store.maps import fetch_localisation


class Command(BaseCommand):
    help = 'Add coordinates to stores'

    def handle(self, *args, **options):
        stores = Store.objects.filter(addresses__latitude=None).exclude(addresses=None).order_by('pk')[:20]

        for store in stores:
            for address in store.addresses.all():
                if address.latitude is None:
                    fetch_localisation(address=address)
                    address.save()
        # print(stores)
        self.stdout.write(self.style.SUCCESS("Yay"))
