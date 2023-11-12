from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email
    


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    posted_time = models.DateTimeField(auto_now_add=True)
    titleJp = models.CharField(max_length=200)
    titleEn = models.CharField(max_length=200)

    def __str__(self):
        return self.titleJp

    class Meta:
        ordering = ['-posted_time']

class Box(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='boxes')
    titleJp = models.CharField(max_length=200, null=True, blank=True)
    titleEn = models.CharField(max_length=200, null=True, blank=True)
    bodyJp = models.TextField(null=True, blank=True)
    bodyEn = models.TextField(null=True, blank=True)
    img = models.ImageField(upload_to='box_images/', null=True, blank=True)
    index = models.IntegerField()

    def __str__(self):
        return f"Box {self.id} - {self.titleJp}"

    class Meta:
        ordering = ['index']
