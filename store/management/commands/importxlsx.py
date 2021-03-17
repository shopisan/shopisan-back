from openpyxl import load_workbook
from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from store.models import StoreCategories, Store


class Command(BaseCommand):
    help = 'Parse Excel files to extract store data'

    def handle(self, *args, **options):
        filename = str(settings.BASE_DIR) + '/store/misc/boutiques.xlsx'
        self.stdout.write(self.style.SUCCESS(print(filename)))
        wb = load_workbook(filename=filename)
        # todo truncate la table, reset les pk + creer un dictionnary avec
        # activities = self.parse_activities(workbook=wb)
        activities = {}
        activities_entity = StoreCategories.objects.all()
        for cat in activities_entity:
            activities[cat.pk] = cat

        self.parse_stores(workbook=wb, activities=activities)

        self.stdout.write(self.style.SUCCESS(settings.BASE_DIR))
        # self.stdout.write(self.style.SUCCESS('Successfully parsed xlsx file'))

    def parse_activities(self, workbook):
        activities = {}
        ws = workbook['ListActivité']
        for row in ws.iter_rows(min_row=2, max_col=3, values_only=True):
            store_cat = StoreCategories()
            store_cat.en = row[1]
            store_cat.fr = row[2]
            store_cat.save()
            activities[store_cat.pk] = store_cat

            # self.stdout.write(self.style.SUCCESS(print(row[1].value)))
            # self.stdout.write(self.style.SUCCESS(print(row[2].value)))
        self.stdout.write(self.style.SUCCESS("Stores categories imported"))
        return activities

    def parse_stores(self, workbook, activities):
        ws = workbook['Boutiques']
        for index, row in enumerate(ws.iter_rows(min_row=2, max_col=9, values_only=True)):
            print(index)
            store = Store()
            store.name = row[0]
            store.streetAvenue = row[1]
            store.country = row[2]
            store.postalCode = row[3]
            store.website = row[4]
            store.openingTimes = row[5]
            store.save()

            self.stdout.write(self.style.SUCCESS(print(row[8])))
            if isinstance(row[8], int):
                store.categories.add(activities[row[8]])
            else:
                activity_ids = str(row[8]).replace('.', ',').split(',')
                for activity_id in activity_ids:
                    if "" != activity_id.strip():
                        store.categories.add(activities[int(activity_id)])
                    # todo créer un dictionnary avec les id en keys ++ associer avec store selon ID
                store.save()
            self.stdout.write(self.style.SUCCESS("Stores imported"))
