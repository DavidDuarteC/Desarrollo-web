import { Injectable } from '@angular/core';
import { Carrito } from './modelo/carrito';
import { Compra } from './modelo/compra';
import { Persona } from './modelo/persona';
import { Producto } from './modelo/producto';

@Injectable({
  providedIn: 'root',
})
export class SessionstorageService {
  productos: Producto[] = [];
  public carrito: Carrito = new Carrito(this.productos);
  compras: Compra[] = [];
  constructor() {
    console.log('Iniciando servicio SessionStorage');
  }

  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken(): any {
    return sessionStorage.getItem('token');
  }

  haySesion_sessionstorage() {
    let personaStr = sessionStorage.getItem('usuario');
    if (personaStr != null) return true;
    else return false;
  }

  iniciarSesion_sessionstorage(persona: Persona) {
    sessionStorage.setItem('usuario', JSON.stringify(persona));
  }

  obtenerSesion_sessionstorage() {
    let str = null;
    let persona: Persona = new Persona(
      ' ',
      ' ',
      ' ',
      ' ',
      this.carrito,
      this.compras
    );
    str = sessionStorage.getItem('usuario');
    if (str != null) {
      persona = JSON.parse(str);
    }
    return persona;
  }

  logout_sessionstorage() {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('token');
  }
}
