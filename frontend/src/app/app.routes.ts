import { RouterModule, Routes } from "@angular/router";
import { PantallaCarritoComponent } from "./pantalla-carrito/pantalla-carrito.component";
import { PantallaContactoComponent } from "./pantalla-contacto/pantalla-contacto.component";
import { PantallaCrudComponent } from "./pantalla-crud/pantalla-crud.component";
import { PantallaEditarProductoComponent } from "./pantalla-editar-producto/pantalla-editar-producto.component";
import { PantallaHistorialComprasComponent } from "./pantalla-historial-compras/pantalla-historial-compras.component";
import { PantallaInicioComponent } from "./pantalla-inicio/pantalla-inicio.component";
import { PantallaLoginComponent } from "./pantalla-login/pantalla-login.component";
import { PantallaPerfilUsuarioComponent } from "./pantalla-perfil-usuario/pantalla-perfil-usuario.component";
import { PantallaPoliticaEnvioComponent } from "./pantalla-politica-envio/pantalla-politica-envio.component";
import { PantallaPoliticaPrivacidadComponent } from "./pantalla-politica-privacidad/pantalla-politica-privacidad.component";
import { PantallaPreguntasFrecuentesComponent } from "./pantalla-preguntas-frecuentes/pantalla-preguntas-frecuentes.component";
import { PantallaTerminosServicioComponent } from "./pantalla-terminos-servicio/pantalla-terminos-servicio.component";
import { PantallaTiendaComponent } from "./pantalla-tienda/pantalla-tienda.component"; 
import { PantallaVerProductoComponent } from "./pantalla-ver-producto/pantalla-ver-producto.component";

const app_routes: Routes = [
    { path: 'inicio', component: PantallaInicioComponent },
    { path: 'tienda', component: PantallaTiendaComponent },
    { path: 'contacto', component: PantallaContactoComponent},
    { path: 'politicas-de-privacidad', component: PantallaPoliticaPrivacidadComponent},
    { path: 'politica-de-envio', component: PantallaPoliticaEnvioComponent},
    { path: 'terminios-y-condiciones', component: PantallaTerminosServicioComponent},
    { path: 'ver-producto', component: PantallaVerProductoComponent},
    { path: 'carrito', component: PantallaCarritoComponent},
    { path: 'preguntas-frecuentes', component: PantallaPreguntasFrecuentesComponent},
    { path: 'login', component: PantallaLoginComponent},
    { path: 'usuario', component: PantallaPerfilUsuarioComponent},
    { path: 'crud', component: PantallaCrudComponent},
    { path: 'editar-producto', component: PantallaEditarProductoComponent},
    { path: 'historial', component: PantallaHistorialComprasComponent},
    { path: '**', pathMatch:'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes);