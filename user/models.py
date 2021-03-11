from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from file_management.models import File


class MyUserManager(BaseUserManager):
    def create_user(self, email, password=None, is_owner=False):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            is_owner=is_owner
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(
            email
        )
        user.is_admin = True
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email address',
        max_length=255,
        unique=True,
        blank=False
    )
    name = models.CharField(max_length=200, null=False, blank=False)
    surname = models.CharField(max_length=200, null=False, blank=False)
    username = models.CharField(max_length=200, null=False, blank=False, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    is_owner = models.BooleanField(default=False)
    date_of_birth = models.DateTimeField(auto_now_add=True)
    picture = models.OneToOneField(File, on_delete=models.DO_NOTHING, null=True)
    last_connection_date = models.DateTimeField(null=True)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']

    def __str__(self):
        return self.email

    @staticmethod
    def has_module_perms(app_label):
        # todo mettre le store management dans une app et gérer comme ca?
        # Simplest possible answer: Yes, always
        return True

    @staticmethod
    def has_perm(obj=None):
        # todo faire le check des permissions (access store management but is_owner == false ==> nope!)
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        return self.is_admin
