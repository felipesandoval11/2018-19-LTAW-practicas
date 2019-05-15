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

def products (request):
    return render(request, "art1.html", {})

def list(request):
    objects = Product.objects.all()
    html = "<p>Listado de articulos</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '<p>'
    return HttpResponse(html)
