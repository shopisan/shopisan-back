from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def get_url_names(request):
    list_of_url_names = [
        "http://127.0.0.1:8000/api/users/",
        "http://127.0.0.1:8000/api/files/",
        "http://127.0.0.1:8000/api/stores/",
        "http://127.0.0.1:8000/api/stores_geo/",
        "http://127.0.0.1:8000/api/posts/",
        "http://127.0.0.1:8000/api/contact/",
        "http://127.0.0.1:8000/api/store_contact/",
    ]

    return Response(list_of_url_names)
