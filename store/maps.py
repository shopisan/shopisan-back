import requests
import json
import math
from .models import Store, Address


def fetch_localisation(address):
    address_str = "%s, %s" % (address.streetAvenue, address.postalCode)
    params = {
        "address": address_str,
        "key": "AIzaSyCegSUW6N1wYgRONnn_4kOZXUzFu7w2Drs"
    }

    response = requests.get('https://maps.googleapis.com/maps/api/geocode/json', params)
    if response.status_code == 200:
        data = json.loads(response.content)
        if address.city == "" or address.city is None:
            address.city = data['results'][0]['address_components'][2]['long_name']

        coordinates = data['results'][0]['geometry']['location']
        address.longitude = coordinates['lng']
        address.latitude = coordinates['lat']


def haversine_distance(address: Address, user_coordinates):
    r = 6373.0

    lat1 = math.radians(float(user_coordinates['lat']))
    lon1 = math.radians(float(user_coordinates['lng']))

    lat2 = math.radians(float(address.latitude))
    lon2 = math.radians(float(address.longitude))

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    distance = r * c

    return round(distance, 2)


def get_shortest_distance(store: Store, user_coordinates):
    smallest = 999999
    for address in store.addresses.all():
        print(address)
        if address.latitude is not None and address.longitude is not None:
            distance = haversine_distance(address, user_coordinates)
            if smallest > distance:
                smallest = distance
    return smallest
