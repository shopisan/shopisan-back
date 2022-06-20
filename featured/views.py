from datetime import datetime

from django.contrib.auth.models import AnonymousUser
from rest_framework.decorators import api_view
from rest_framework.response import Response

from featured.models import Code


@api_view(["POST"])
def add_code_to_user(request):
    if isinstance(request.user, AnonymousUser):
        return Response(status=205)

    code_str = request.data.get('code', None)
    user = request.user
    code = Code.objects.get(code=code_str)
    if code is None:
        return Response(status=205)

    date = datetime.now()
    if code.to_date < date or not code.is_active or code.is_closed:
        return Response(status=204)

    code.users.add(user)
    code.save()

    return Response(status=200)
