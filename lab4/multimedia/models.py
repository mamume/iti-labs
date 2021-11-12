from django.db import models

# Create your models here.
class Meta(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    release_date = models.DateField()
    categories = models.ManyToManyField('Category')
    casts = models.ManyToManyField('Actor')
    poster_image = models.ImageField()

class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Actor(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()

    def __str__(self):
        return self.name

class Movie(Meta):
    pass

class Serie(Meta):
    num_of_eposides = models.IntegerField()