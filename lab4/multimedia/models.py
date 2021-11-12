from django.db import models

# Create your models here.
class MediaMeta(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    release_date = models.DateField()
    categories = models.ManyToManyField('Category', null=True, blank=True)
    casts = models.ManyToManyField('Actor', null=True, blank=True)
    poster_image = models.ImageField(upload_to='posters')

class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Actor(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()

    def __str__(self):
        return self.name

class Movie(MediaMeta):
    pass

class Serie(MediaMeta):
    num_of_eposides = models.IntegerField()