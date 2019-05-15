# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from mi_tienda.models import Product

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

# OTRA MANERA DE DECLARAR
#def principal(request):
#    html = open('mi_tienda/pagina1.html')
#    return HttpResponse(html)

def products (request, param):
    numero = int(param)
    numero = str(numero)
    return render(request, "art" + numero + ".html", {})

def list(request):
    objects = Product.objects.all()
    html = "<p>ALL THE ARTICLES</p>"
    for elt in objects:
     print(elt.name)
     html += '<p>'+ "PRODUCT NAME: " + elt.name + ' STOCK: ' + str(elt.stock) + " PRICE: " + str(elt.price) + '<p>'
    return HttpResponse(html)
