from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "home.html"

class ServicioEnsayosNoDestructivosView(TemplateView):
    template_name = "servicios/ensayos_no_destructivos.html"

class ServicioTratamientoTermicoDurezaView(TemplateView):
    template_name = "servicios/tratamiento_termico_dureza.html"

class ServicioEscuelaSoldaduraView(TemplateView):
    template_name = "servicios/escuela_soldadura.html"

class ServicioElaboracionCalificacionProcedimientosView(TemplateView):
    template_name = "servicios/elaboracion_calificacion_procedimientos.html"

class ServicioMetalografiaView(TemplateView):
    template_name = "servicios/metalografia.html"

class ServicioVerificacionMaterialesView(TemplateView):
    template_name = "servicios/verificacion_materiales.html"

class ServicioPruebaVacioSoldadurasView(TemplateView):
    template_name = "servicios/prueba_vacio_soldaduras.html"

class ServicioCapacitacionCertificacionView(TemplateView):
    template_name = "servicios/capacitacion_certificacion.html"