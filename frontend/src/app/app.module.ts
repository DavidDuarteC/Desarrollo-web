import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { PantallaTiendaComponent } from './pantalla-tienda/pantalla-tienda.component';
import { FooterComponent } from './footer/footer.component';

//Rutas
import { app_routing } from './app.routes';
import { BotonWhatsappComponent } from './boton-whatsapp/boton-whatsapp.component';
import { PantallaContactoComponent } from './pantalla-contacto/pantalla-contacto.component';
import { PantallaPoliticaPrivacidadComponent } from './pantalla-politica-privacidad/pantalla-politica-privacidad.component';
import { PantallaPoliticaEnvioComponent } from './pantalla-politica-envio/pantalla-politica-envio.component';
import { PantallaTerminosServicioComponent } from './pantalla-terminos-servicio/pantalla-terminos-servicio.component';
import { PantallaVerProductoComponent } from './pantalla-ver-producto/pantalla-ver-producto.component';
import { PantallaCarritoComponent } from './pantalla-carrito/pantalla-carrito.component';
import { PantallaPreguntasFrecuentesComponent } from './pantalla-preguntas-frecuentes/pantalla-preguntas-frecuentes.component';
import { PantallaLoginComponent } from './pantalla-login/pantalla-login.component';
import { PantallaPerfilUsuarioComponent } from './pantalla-perfil-usuario/pantalla-perfil-usuario.component';

//Servicios
import { ProductosService } from './productos.service';
import { APIService } from './API.service';
import { PersonaService } from './persona.service';
import { SessionstorageService } from './sessionstorage.service';
import { PantallaCrudComponent } from './pantalla-crud/pantalla-crud.component';
import { PantallaEditarProductoComponent } from './pantalla-editar-producto/pantalla-editar-producto.component';
import { PantallaHistorialComprasComponent } from './pantalla-historial-compras/pantalla-historial-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PantallaInicioComponent,
    PantallaTiendaComponent,
    FooterComponent,
    BotonWhatsappComponent,
    PantallaContactoComponent,
    PantallaPoliticaPrivacidadComponent,
    PantallaPoliticaEnvioComponent,
    PantallaTerminosServicioComponent,
    PantallaVerProductoComponent,
    PantallaCarritoComponent,
    PantallaPreguntasFrecuentesComponent,
    PantallaLoginComponent,
    PantallaPerfilUsuarioComponent,
    PantallaCrudComponent,
    PantallaEditarProductoComponent,
    PantallaHistorialComprasComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
  ],
  providers: [
    ProductosService,
    PersonaService,
    APIService,
    SessionstorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
