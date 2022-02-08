import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { APIService } from '../API.service';
import { Carrito } from '../modelo/carrito';
import { Compra } from '../modelo/compra';
import { Persona } from '../modelo/persona';
import { Producto } from '../modelo/producto';
import { PersonaService } from '../persona.service';
import { SessionstorageService } from '../sessionstorage.service';

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css'],
})
export class PantallaLoginComponent implements OnInit {
  productos: Producto[] = [];
  public carrito: Carrito = new Carrito(this.productos);
  public compras: Compra[] = [];

  public persona: Persona = new Persona(
    '',
    '',
    '',
    '',
    this.carrito,
    this.compras
  );
  public loggedin: boolean;
  constructor(
    public router: Router,
    public _personaService: PersonaService,
    public _localstorage: APIService,
    public _sessionstorage: SessionstorageService
  ) {
    this.loggedin = this._sessionstorage.haySesion_sessionstorage();
  }

  ngOnInit(): void {
    //Redirigir a home si hay sesion iniciada
    this.loggedin = this._sessionstorage.haySesion_sessionstorage();
    if (this.loggedin) {
      this.router.navigate(['/home']);
    }

    /*===== LOGIN SHOW and HIDDEN =====*/
    const signUp: any = document.getElementById('sign-up'),
      signIn: any = document.getElementById('sign-in'),
      loginIn: any = document.getElementById('login-in'),
      loginUp: any = document.getElementById('login-up');

    signUp.addEventListener('click', () => {
      // Remove classes first if they exist
      loginIn.classList.remove('block');
      loginUp.classList.remove('none');

      // Add classes
      loginIn.classList.toggle('none');
      loginUp.classList.toggle('block');
    });

    signIn.addEventListener('click', () => {
      // Remove classes first if they exist
      loginIn.classList.remove('none');
      loginUp.classList.remove('block');

      // Add classes
      loginIn.classList.toggle('block');
      loginUp.classList.toggle('none');
    });

    this._personaService.actualizarPersonas();
  }

  async formSubmitRegistro() {
    if (this.persona.contrasena != '' && this.persona.email != '') {
      Swal.fire(
        'Ingrese datos',
        'Por favor ingrese todos los campos',
        'warning'
      );
    }
    if (
      this.persona.contrasena != null &&
      this.persona.email != null &&
      this._personaService.existPersonaByEmail(this.persona.email) == false
    ) {
      this._personaService.savePersona(this.persona);
      Swal.fire(
        'Usuario registrado',
        'Usuario guardad@ correctamente',
        'success'
      );
      await new Promise((f) => setTimeout(f, 1000));
      // alert("Persona guardada correctamente");
      this.persona = new Persona('', '', '', '', this.carrito, this.compras);
      window.location.reload();
    } else {
      Swal.fire(
        'Usuario ya existe',
        'Ese usuario ya existe, por favor ingrese un usuario nuevo',
        'warning'
      );
      // alert("Persona ya se encuentra registrada");
    }
    // Mostrar lista personas
    // console.log(this._personaService.personas);
  }

  async formSubmitLogin() {
    if (!this._sessionstorage.haySesion_sessionstorage()) {
      var seInicioSesion = this._personaService.login(
        this.persona.email!,
        this.persona.contrasena!
      );
      await new Promise((f) => setTimeout(f, 500));
      var token = this._sessionstorage.getToken();
      console.log('#tokenEnSession: ' + this._sessionstorage.getToken());
      console.log('#seInicioSesion: ' + seInicioSesion);
      // if (seInicioSesion) {
      if (token != null) {
        // if (
        //   this.persona.contrasena != null &&
        //   this.persona.email != null &&
        //   this._personaService.existPersonaByEmail(this.persona.email) == true
        // ) {
        //   if (
        //     this._personaService.verificarContrasena(
        //       this.persona.email,
        //       this.persona.contrasena
        //     )
        //   )
        this.persona = this._personaService.getPersonaByEmail(
          this.persona.email!
        );
        this._sessionstorage.iniciarSesion_sessionstorage(this.persona);
        Swal.fire(
          'Bienvenido ' + this.persona.nombre,
          'Usuario en sesión',
          'success'
        );
        await new Promise((f) => setTimeout(f, 1000));
        // alert("Bienvenido "+this.persona.nombre);
        this.router.navigate(['/home']);
        window.location.reload();
      } else {
        Swal.fire(
          'Contraseña incorrecta',
          'Vuelva a ingresar su contraseña',
          'error'
        );
        // alert("Contraseña incorrecta");
      }
      // } else {
      //   Swal.fire(
      //     'No se encontro usuario',
      //     'Ese usuario no existe, por favor cree uno :)',
      //     'info'
      //   );
      //   // alert("No se encontro usuario");
      // }
    } else {
      //sacar de la pagina TODO
      Swal.fire(
        'Ya hay una sesión existente',
        'Por favor cerrar sesión para ingresar con otro usuario',
        'warning'
      );
      // alert("ya hay alguien logeado");
    }
  }
}
