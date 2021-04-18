from django.core.management.base import BaseCommand, CommandError
from store.models import Countries, Address
from django.conf import settings
import json


def load_file(filename):
    country_dict = {}
    with open(filename) as json_file:
        data = json.load(json_file)

        print(data)
        for country_data in data:
            country_dict[country_data['alpha2']] = country_data['name']

        return country_dict


class Command(BaseCommand):
    help = 'Les traductions se trouvent sur https://stefangabos.github.io/world_countries/'

    def handle(self, *args, **options):
        langs = ['fr', 'en']
        iso_countries = {}

        for lang in langs:
            filename = str(settings.BASE_DIR) + '/store/misc/countries.'+lang+'.json'
            iso_countries[lang] = load_file(filename)
        # todo read filename
        # todo créer un json avec uniquement iso: translation
        with open(str(settings.BASE_DIR) + '/store/misc/iso_countries.json', 'w') as f:
            f.write(json.dumps(iso_countries, indent=4))

        self.stdout.write(self.style.SUCCESS("Translations added successfully"))
