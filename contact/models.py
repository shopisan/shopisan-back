from django.db import models


class ContactTicket(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    processed = models.BooleanField(default=False)
    objects = models.Manager()

    def __str__(self):
        return self.subject


class StoreContactTicket(models.Model):
    brand = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=50)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    processed = models.BooleanField(default=False)
    objects = models.Manager()

    def __str__(self):
        return self.subject
