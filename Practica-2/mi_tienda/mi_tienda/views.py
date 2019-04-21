from django.http import HttpResponse

def mi_funcion(request):
	html = "Hola! Mi primera UrL!!"

	return HttpResponse(html)
