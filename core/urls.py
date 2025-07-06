from django.urls import path
from .views import HomeView
from . import views

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('servicio/ensayos-no-destructivos/', views.ServicioEnsayosNoDestructivosView.as_view(), name='servicio_ensayos_no_destructivos'),
    path('servicio/tratamiento-termico-dureza/', views.ServicioTratamientoTermicoDurezaView.as_view(), name='servicio_tratamiento_termico_dureza'),
    path('servicio/escuela-soldadura/', views.ServicioEscuelaSoldaduraView.as_view(), name='servicio_escuela_soldadura'),
    path('servicio/elaboracion-calificacion-procedimientos/', views.ServicioElaboracionCalificacionProcedimientosView.as_view(), name='servicio_elaboracion_calificacion_procedimientos'),
    path('servicio/metalografia/', views.ServicioMetalografiaView.as_view(), name='servicio_metalografia'),
    path('servicio/verificacion-materiales/', views.ServicioVerificacionMaterialesView.as_view(), name='servicio_verificacion_materiales'),
    path('servicio/prueba-vacio-soldaduras/', views.ServicioPruebaVacioSoldadurasView.as_view(), name='servicio_prueba_vacio_soldaduras'),
    path('servicio/capacitacion-certificacion/', views.ServicioCapacitacionCertificacionView.as_view(), name='servicio_capacitacion_certificacion'),
]
