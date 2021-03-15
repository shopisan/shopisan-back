from django.db import models
from file_management.models import File


class Country(models.Model):
    name = models.CharField(max_length=100, default='')
    iso_code = models.CharField(max_length=3)


class City(models.Model):
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=100, default='')


class StoreCategories(models.Model):
    name = models.CharField(max_length=100, null=False)


class Store(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='')
    streetAvenue = models.CharField(max_length=200, null=True)
    postalCode = models.CharField(max_length=20, null=True)
    website = models.CharField(max_length=100, null=True)
    storeStatus = models.IntegerField(default=0)
    openingTimes = models.JSONField(null=True)
    profilePicture = models.ForeignKey(File, on_delete=models.SET_NULL, null=True)
    categories = models.ManyToManyField(StoreCategories)
    latitude = models.CharField(max_length=100)
    longitude = models.CharField(max_length=100)

