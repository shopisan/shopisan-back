import json

import pycountry
import requests

from django.core.management.base import BaseCommand, CommandError
from django.core.exceptions import ObjectDoesNotExist
from store.models import City, Address, Countries


def get_city(address_component):
    for component in address_component:
        if 'types' in component.keys() and ('locality' in component['types'] or 'postal_town' in component['types']
                                            or 'administrative_area_level_3' in component['types']):
            return component['long_name']


def get_country(address_component):
    for component in address_component:
        if 'types' in component.keys() and 'country' in component['types']:
            return component


def get_geolocation(country_iso, postal_code=None, address_str=None):
    components = "country:" + country_iso
    if postal_code is not None:
        components = "country:"+country_iso+"|postal_code:"+postal_code

    params = {
        "components": components,
        "language": "en",
        "key": "AIzaSyCegSUW6N1wYgRONnn_4kOZXUzFu7w2Drs"
    }

    if address_str is not None:
        params["address"] = address_str

    response = requests.get('https://maps.googleapis.com/maps/api/geocode/json', params)
    if response.status_code == 200:
        data = json.loads(response.content)
        if len(data['results']) > 0:
            city = get_city(data['results'][0]['address_components'])
            country = get_country(data['results'][0]['address_components'])

            if city is not None:
                coordinates = data['results'][0]['geometry']['location']
                return {"coordinates": coordinates, "city_name": city, 'country_iso': country['short_name'],
                        'country_name': country['long_name']}

    return False


class Command(BaseCommand):
    help = 'Collect all countries from the stores present in the database'

    def handle(self, *args, **options):
        saved_cities = City.objects.all()
        postal_codes_list = []
        new_cities = {}
        # lister les cities deja enregistrée
        for city in saved_cities:
            for postal_code in city.postal_codes:
                postal_codes_list.append(postal_code)

        new_cities_addresses = Address.objects.exclude(postalCode__in=postal_codes_list).exclude(postalCode=None)[:50]

        for new_address in new_cities_addresses:
            if new_address.postalCode not in postal_codes_list:
                result = get_geolocation(new_address.country, new_address.postalCode)
                if result is False and new_address.postalCode is not None and new_address.streetAvenue is not None:
                    result = get_geolocation(new_address.country, new_address.postalCode, new_address.streetAvenue)
                    if result is False:
                        result = get_geolocation(new_address.country, None, new_address.streetAvenue)

                if result is not False:
                    city_name = result['city_name'].strip()
                    if city_name in new_cities.keys():
                        city = new_cities[city_name]
                    else:
                        address_str = city_name
                        result = get_geolocation(new_address.country, None, address_str)
                        city_name = result['city_name'].strip()

                        try:
                            city = City.objects.get(en=city_name)
                        except ObjectDoesNotExist:
                            city = City(
                                en=city_name,
                                latitude=result['coordinates']['lat'],
                                longitude=result['coordinates']['lng'],
                                postal_codes=[new_address.postalCode]
                            )

                            country = Countries.objects.filter(iso=result['country_iso']).first()
                            if country is not None:
                                city.country = country

                    if new_address.postalCode not in city.postal_codes:
                        city.postal_codes.append(new_address.postalCode)

                    postal_codes_list.append(new_address.postalCode)
                    if city.en not in new_cities.keys():
                        new_cities[city.en] = city

                    city.save()

                else:
                    print("Couldn't find: " + new_address.country + " " + new_address.postalCode + " " +
                          new_address.streetAvenue)

        self.stdout.write(self.style.SUCCESS("City check successful"))
