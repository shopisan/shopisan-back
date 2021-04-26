from django.shortcuts import render


def index(request, *args, **kwargs):
    tracking_allowed = request.COOKIES.get('rcl_statistics_consent', '')
    print("cookie: " + tracking_allowed)
    return render(request, "web/index.html", {"tracking_allowed": tracking_allowed})
