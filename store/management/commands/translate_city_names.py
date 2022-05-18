import json

import requests
from django.core.management.base import BaseCommand, CommandError
from store.models import City


def get_city(address_component):
    for component in address_component:
        if 'types' in component.keys() and ('locality' in component['types'] or 'postal_town' in component['types']
                                            or 'administrative_area_level_3' in component['types']):
            return component['long_name']


def get_geolocation(locale, country_iso, city):
    components = "country:" + country_iso

    params = {
        "address": city,
        "components": components,
        "language": locale,
        "key": "AIzaSyCegSUW6N1wYgRONnn_4kOZXUzFu7w2Drs"
    }

    response = requests.get('https://maps.googleapis.com/maps/api/geocode/json', params)
    if response.status_code == 200:
        data = json.loads(response.content)
        if len(data['results']) > 0:
            city = get_city(data['results'][0]['address_components'])
            # print(city)
            return city

    return False


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('locale', nargs='+', type=str)

    def handle(self, *args, **options):
        for locale in options['locale']:
            filters = {}
            filters[locale] = None
            cities = City.objects.filter(**filters)

            for city in cities:
                city_name = get_geolocation(locale, country_iso=city.country.iso, city=city.en)
                setattr(city, locale, city_name)
                city.save()

            self.stdout.write(self.style.SUCCESS('Successfully translated in "%s"' % locale))
