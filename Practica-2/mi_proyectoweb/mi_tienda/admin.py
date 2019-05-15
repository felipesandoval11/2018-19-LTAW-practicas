from __future__ import unicode_literals
from django.contrib import admin

# Register your models here.
from mi_tienda.models import Verticales
from mi_tienda.models import Cuadrados
from mi_tienda.models import Pared

# Register your models here.
admin.site.register(Verticales)
admin.site.register(Cuadrados)
admin.site.register(Pared)
