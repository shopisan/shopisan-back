from django.db import models
from file_management.models import File
from django.db.models import Avg


class StoreCategories(models.Model):
    en = models.CharField(max_length=100, null=False)
    fr = models.CharField(max_length=100, null=False)


class Store(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='')
    website = models.CharField(max_length=100, null=True)
    storeStatus = models.IntegerField(default=0)
    openingTimes = models.JSONField(null=True)
    profilePicture = models.ForeignKey(File, on_delete=models.SET_NULL, null=True)
    categories = models.ManyToManyField(StoreCategories)
    owner = models.ForeignKey("user.Profile", related_name="owned_stores", on_delete=models.CASCADE, null=True)
    appointmentOnly = models.BooleanField(default=False)
    description = models.TextField(default="")

    @property
    def average_score(self):
        return self.evaluations.all().aggregate(Avg('score'))


class Address(models.Model):
    streetAvenue = models.CharField(max_length=200, null=True)
    postalCode = models.CharField(max_length=20, null=True)
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=3)
    latitude = models.CharField(max_length=100, null=True)
    longitude = models.CharField(max_length=100, null=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, null=False, related_name="addresses")


class Evaluation(models.Model):
    score = models.FloatField()
    store = models.ForeignKey(Store, related_name="evaluations", on_delete=models.CASCADE, null=False)
    profile = models.ForeignKey("user.Profile", related_name='evaluations', on_delete=models.CASCADE, null=False)

