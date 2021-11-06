from django.db import models
from django.core.validators import MaxValueValidator

class ActorID(models.Model):
    idNum = models.IntegerField()

    def __str__(self):
        return str(self.idNum)

class Director(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Actor(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    idnum = models.OneToOneField(ActorID, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(verbose_name='Movie Description', null=True, blank=True)
    rating = models.IntegerField(default=0, null=True, blank=True, validators=[MaxValueValidator(10)])
    category = models.ManyToManyField(Category)
    cast = models.ManyToManyField(Actor)
    director = models.ForeignKey(Director, on_delete=models.CASCADE, null=True, blank=True)