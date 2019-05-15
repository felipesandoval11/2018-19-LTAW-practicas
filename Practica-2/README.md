# Práctica 2

En este repo se colocarán los ficheros de la práctica 2 de LTAW


TIENDA EN UN SERVIDOR DJANGO!!

Recordar que:

LA VERSION DE DJANGO A TENER
django-admin --version
1.11.11

y luego
python
import django
django.VERSION

PARA ARRANCAR
python manage.py runserver

y accedo a http://127.0.0.1:8000/


SI SE CREA UNA NUEVA CLASE
python manage.py makemigrations
python manage.py migrate

PARA AGREGAR PRODUCTOS DE SQLITE
python manage.py shell
from mi_tienda.models import ___
p1 = Product(name="fpga", stock=3, price=6.3)

PARA LEER PRODUCTOS DE SQLITE

python manage.py shell
from mi_tienda.models import Product
productos = Product.objects.all()
