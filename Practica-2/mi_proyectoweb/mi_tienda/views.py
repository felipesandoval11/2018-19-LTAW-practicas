# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from mi_tienda.models import Product
from mi_tienda.models import Verticales
from mi_tienda.models import Cuadrados
from mi_tienda.models import Pared

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

# OTRA MANERA DE DECLARAR
#def principal(request):
#    html = open('mi_tienda/pagina1.html')
#    return HttpResponse(html)

def vertical (request):
    return render(request, "vertical.html", {})

def cuadrados (request):
    return render(request, "cuadrados.html", {})

def pared (request):
    return render(request, "pared.html", {})

def products (request, param):
    numero = int(param)
    numero = str(numero)
    return render(request, "art" + numero + ".html", {})

def list(request):
    objects = Verticales.objects.all()
    html = "<p>ALL THE ARTICLES</p>"
    for elt in objects:
     print(elt.name)
     html += '<p>'+ "[ESCULTURAS VERTICALES] " + elt.name + ' STOCK: ' + str(elt.stock) + " PRICE: " + str(elt.price) + '<p>'

    objects = Cuadrados.objects.all()
    for elt in objects:
     print(elt.name)
     html += '<p>'+ "[ESCULTURAS CUADRADOS] " + elt.name + ' STOCK: ' + str(elt.stock) + " PRICE: " + str(elt.price) + '<p>'

    objects = Pared.objects.all()
    for elt in objects:
     print(elt.name)
     html += '<p>'+ "[ESCULTURAS DE PARED] " + elt.name + ' STOCK: ' + str(elt.stock) + " PRICE: " + str(elt.price) + '<p>'

    html += "<a href='./index.html'> HOME </a>"
    return HttpResponse(html)
