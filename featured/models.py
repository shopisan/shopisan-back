from django.db import models

from store.models import Store
from user.models import User


class Influencer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    network = models.CharField(max_length=100)
    country = models.CharField(max_length=3)

    objects = models.Manager()

    # def __init__(self, *args, **kwargs):
    #     super().__init__(args, kwargs)
    #     self.codes = None

    def __str__(self):
        return self.name


class Code(models.Model):
    id = models.AutoField(primary_key=True)
    code = models.CharField(max_length=20)
    influencer = models.ForeignKey("influencer", related_name="codes", on_delete=models.CASCADE, null=False,
                                   blank=False)
    users = models.ManyToManyField(User, blank=True)
    featured_stores = models.ManyToManyField(Store)
    is_contest = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)  # Can users still participate
    is_closed = models.BooleanField(default=True)  # Can users still see the list of stores?
    all_users = models.BooleanField(default=False)
    from_date = models.DateTimeField()
    to_date = models.DateTimeField()
    number_winners = models.IntegerField(default=1)
    notify_emails = models.TextField(default="info@shopian.com")

    objects = models.Manager()
