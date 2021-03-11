from django.db import models
from user.models import User
from store.models import Store
# Create your models here.


# todo remplacer ca ==> Mettre ca direct dans User?
class UserFavorite(models.Model):
    favoriteId = models.AutoField(primary_key=True)
    userId = models.ManyToManyField(User)
    storeId = models.ManyToManyField(Store)


# todo vérifier les relations
class Comment(models.Model):
    commentId = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    storeId = models.ManyToManyField(Store)
    rating = models.IntegerField(null=True)
    userComment = models.TextField(null=True)
    commentStatus = models.IntegerField(default=0)
