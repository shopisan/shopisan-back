from django.db import models


class ContactTicket(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    processed = models.BooleanField(default=False)
    lang = models.CharField(max_length=2)
    objects = models.Manager()

    def __str__(self):
        return self.subject


class StoreContactTicket(models.Model):
    brand = models.CharField(max_length=200)
    username = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=50)
    password = models.CharField(max_length=150)
    message = models.TextField()
    processed = models.BooleanField(default=False)
    lang = models.CharField(max_length=2)
    objects = models.Manager()

    def __str__(self):
        return self.brand + " " + self.name + " " + self.surname
