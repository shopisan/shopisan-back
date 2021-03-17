import requests
import json
import math
from .models import Store


def fetch_localisation(store):
    address = "%s, %s" % (store.streetAvenue, store.postalCode)
    # todo call vers google API
    # todo check comment store des constantes globales
    params = {
        "address": address,
        "key": "AIzaSyCegSUW6N1wYgRONnn_4kOZXUzFu7w2Drs"
    }

    response = requests.get('https://maps.googleapis.com/maps/api/geocode/json', params)
    if response.status_code == 200:
        data = json.loads(response.content)
        coordinates = data['results'][0]['geometry']['location']
        store.longitude = coordinates['lng']
        store.latitude = coordinates['lat']

    # print(response.content)


def haversine_distance(store: Store, user_coordinates):
    r = 6373.0

    lat1 = math.radians(float(user_coordinates['lat']))
    lon1 = math.radians(float(user_coordinates['lng']))

    lat2 = math.radians(float(store.latitude))
    lon2 = math.radians(float(store.longitude))

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    distance = r * c

    print(round(distance, 2))
    return round(distance, 2)

