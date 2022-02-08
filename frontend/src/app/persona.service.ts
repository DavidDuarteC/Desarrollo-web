import { Injectable } from '@angular/core';
import { APIService } from './API.service';
import { Carrito } from './modelo/carrito';
import { Compra } from './modelo/compra';
import { Persona } from './modelo/persona';
import { Producto } from './modelo/producto';
import { SessionstorageService } from './sessionstorage.service';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  public personas: Persona[] = [];
  productos: Producto[] = [];
  carrito: Carrito = new Carrito(this.productos);
  compras: Compra[] = [];
  public personasExt: any;
  personashttp: any;

  constructor(
    public _API: APIService,
    public _sessionStorage: SessionstorageService
  ) {
    console.log('ProductosService Funcionando');
    this.actualizarPersonas();
    this.async_print_personas();
  }

  async async_print_personas() {
    await new Promise((f) => setTimeout(f, 1000));
    console.log('personaService#printPersonas: ');
    console.log(this.personas);
    console.log('------------------');
  }

  login(email: string, pass: string): any {
    this._API.login(email, pass).subscribe(
      (resp) => {
        this._sessionStorage.saveToken(resp.headers.get('authorization'));
        return true;
      },
      (error) => {
        console.error(error);
        return false;
      }
    );
    return false;
  }

  quitarProdCarrito(persona: Persona, producto: Producto) {}

  agregarProdCarrito(persona: Persona, producto: Producto, cant: number) {
    this._API.agregarProdCarrito(persona, producto, cant).subscribe(
      (resp) => {},
      (error) => {
        console.error(error);
      }
    );
  }

  eliminarProdCarrito(persona: Persona, producto: Producto): any {
    this._API.eliminarProdCarrito(persona, producto).subscribe(
      (resp) => {
        // console.log('#eliminarProdCarrito: ' + resp);
        return resp;
      },
      (error) => {
        console.error(error);
      }
    );
    return null;
  }

  saveCompra(persona: Persona, compra: Compra) {
    this._API.saveCompra(compra, persona).subscribe(
      (resp) => {
        console.log('#eliminarProdCarrito: ' + resp);
        return resp;
      },
      (error) => {
        console.error(error);
      }
    );
    return null;
  }

  getPersonas() {
    return this.personas;
  }

  savePersona(persona: any) {
    persona.rol = 'user';
    this._API.savePersona(persona).subscribe(
      (resp) => {
        console.log('Se guardo la persona');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  actualizarPersonas() {
    this._API.getPersonas().subscribe(
      (resp) => {
        this.personas = resp;
        for (var persona of this.personas) {
          var productos = persona.carrito!.productos;
          for (var i = 0; i < productos!.length; i++) {
            productos[i].cantidad = 1;
            for (var j = i + 1; j < productos.length; j++) {
              if (productos[i].id == productos[j].id) {
                productos[i].cantidad!++;
                productos.splice(j, 1);
                j--;
              }
            }
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  existPersonaByEmail(emailP: string) {
    this.actualizarPersonas();

    for (let persona of this.personas) {
      if (emailP == persona.email) {
        return true;
      }
    }
    return false;
  }

  getPersonaByEmail(emailP: string) {
    for (let persona of this.personas) {
      if (emailP == persona.email) {
        return persona;
      }
    }
    return new Persona(' ', ' ', ' ', ' ', this.carrito, this.compras);
  }

  verificarContrasena(emailP: string, contrasenaP: string) {
    for (let persona of this.personas) {
      if (emailP == persona.email) {
        if (contrasenaP == persona.contrasena) {
          return true;
        }
      }
    }
    return false;
  }
}
