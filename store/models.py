from django.db import models
from django.contrib.postgres.fields import ArrayField
from file_management.models import File
from django.db.models import Avg


class StoreCategories(models.Model):
    en = models.CharField(max_length=100, null=False)
    fr = models.CharField(max_length=100, null=False)

    objects = models.Manager()

    class Meta:
        verbose_name_plural = "Store categories"

    def __str__(self):
        return self.fr


class Store(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='')
    website = models.CharField(max_length=100, null=True, blank=True)
    # 0 => Waiting approval, 1 => Published, 2 => Banned
    storeStatus = models.IntegerField(default=0)
    openingTimes = models.JSONField(null=True)
    profilePicture = models.ForeignKey(File, on_delete=models.SET_NULL, null=True, blank=True)
    categories = models.ManyToManyField(StoreCategories, blank=True)
    owner = models.ForeignKey("user.Profile", related_name="owned_stores", on_delete=models.CASCADE, null=True,
                              blank=True)
    appointmentOnly = models.BooleanField(default=False)
    description_fr = models.TextField(default="", null=True, blank=True)
    description_en = models.TextField(default="", null=True, blank=True)

    objects = models.Manager()

    # def __init__(self, *args, **kwargs):
    #     super().__init__(args, kwargs)
    #     self.evaluations = None

    def __str__(self):
        return self.name

    @property
    def average_score(self):
        return self.evaluations.all().aggregate(Avg('score'))


class Address(models.Model):
    # id = models.AutoField(primary_key=True)
    streetAvenue = models.CharField(max_length=200, null=True)
    postalCode = models.CharField(max_length=20, null=True)
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=3)
    latitude = models.CharField(max_length=100, null=True)
    longitude = models.CharField(max_length=100, null=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, null=False, related_name="addresses")

    objects = models.Manager()


class Evaluation(models.Model):
    score = models.FloatField()
    store = models.ForeignKey(Store, related_name="evaluations", on_delete=models.CASCADE, null=False)
    profile = models.ForeignKey("user.Profile", related_name='evaluations', on_delete=models.CASCADE, null=False)

    objects = models.Manager()


class Countries(models.Model):
    iso = models.CharField(max_length=3)

    objects = models.Manager()

    def __str__(self):
        return self.iso


class City(models.Model):
    en = models.CharField(max_length=150)
    fr = models.CharField(max_length=150, null=True)
    postal_codes = ArrayField(models.CharField(max_length=30))
    country = models.ForeignKey(Countries, related_name="cities", on_delete=models.DO_NOTHING, null=False)
    latitude = models.FloatField()
    longitude = models.FloatField()

    objects = models.Manager()

    class Meta:
        verbose_name_plural = "Cities"

    def __str__(self):
        return self.en
