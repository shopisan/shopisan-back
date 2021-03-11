from django.db import models
from file_management.models import File


class Country(models.Model):
    name = models.CharField(max_length=100, default='')

    class Meta:
        ordering = ['id', 'name']


class City(models.Model):
    country = models.ForeignKey(Country, on_delete=models.SET_NULL)
    name = models.CharField(max_length=100, default='')

    class Meta:
        ordering = ['id', 'country', 'name']


class StoreCategories(models.Model):
    activityId = models.AutoField(primary_key=True)
    activityName = models.CharField(max_length=100, null=False)

    class Meta:
        ordering = ['activityId', 'activityName']


class Store(models.Model):
    id = models.AutoField(primary_key=True)
    storeName = models.CharField(max_length=100, default='')
    storeId = models.IntegerField(default=0)
    streetAvenue = models.CharField(max_length=200, null=True)
    postalCode = models.CharField(max_length=20, null=True)
    website = models.CharField(max_length=100, null=True)
    storeStatus = models.IntegerField(default=0)
    # todo transformer openingTime en JSON?
    #       ==> prévoir filtrage par opening hours
    #       ==> JSON permet-il de filtrer en DB ==> Je ne pense pas!
    openingTimes = models.CharField(max_length=200, null=True)
    profilePicture = models.ForeignKey(File, on_delete=models.SET_NULL, null=True)
    # todo prévoir l'association au Posts pour le feed

    categories = models.ManyToManyField(StoreCategories)

    class Meta:
        ordering = ['id', 'storeName', 'storeId', 'streetAvenue', 'postalCode', 'website', 'storeStatus',
                    'openingTimes', 'profilePicture', 'activities']


