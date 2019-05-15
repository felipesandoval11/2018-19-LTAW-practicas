from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Product (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

class Verticales (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

class Cuadrados (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

class Pared (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
