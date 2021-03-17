from django.core.management.base import BaseCommand, CommandError
from store.models import StoreCategories, Store
from store.maps import fetch_localisation


class Command(BaseCommand):
    help = 'Add coordinates to stores'

    def handle(self, *args, **options):
        stores = Store.objects.filter(latitude=None).order_by('pk')[:15]

        for store in stores:
            if store.latitude is None:
                fetch_localisation(store)
                store.save()
        # print(stores)
        self.stdout.write(self.style.SUCCESS("Yay"))
