import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from './modelo/compra';
import { Persona } from './modelo/persona';
import { Producto } from './modelo/producto';
import { JwtRequest } from './modelo/JwtRequest';
import { JwtResponse } from './modelo/JwtResponse';
import { SessionstorageService } from './sessionstorage.service';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  Url_login = 'http://localhost:8080/login';
  Url_personas = 'http://localhost:8080/personas/';
  Url_productos = 'http://localhost:8080/productos/';
  Url_carritos = 'http://localhost:8080/carritos/';
  Url_compras = 'http://localhost:8080/compras/';

  constructor(
    private _http: HttpClient,
    private _sessionStorage: SessionstorageService
  ) {
    console.log('Iniciando servicio API');
  }

  //PERSONAS-------------------------------------
  public login(email: string, pass: string): Observable<any> {
    var req: JwtRequest = {
      email: email,
      contrasena: pass,
    };
    return this._http.post(this.Url_login, req, {
      observe: 'response',
    });
  }

  public savePersona(persona: any): Observable<any> {
    return this._http.post(this.Url_personas + 'savePersona', persona);
  }

  public getPersonas(): Observable<any> {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    return this._http.get(this.Url_personas + 'getPersonas', header);
  }

  //CRUD PRODUCTO-------------------------------------
  //C
  public saveProducto(producto: any): Observable<any> {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    return this._http.post(
      this.Url_productos + 'saveProducto',
      producto,
      header
    );
  }

  //U
  modifyProducto(productoP: Producto) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    return this._http.post(
      this.Url_productos + 'modifyProducto',
      productoP,
      header
    );
  }

  //R
  getProductos() {
    // var token = this._sessionStorage.getToken();
    // token = token ? token : '';
    // var header = {
    //   headers: new HttpHeaders({
    //     Authorization: token,
    //   }),
    // };
    return this._http.get(this.Url_productos + 'getProductos');
  }
  //D
  deleteProducto(productoP: Producto) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    return this._http.post(
      this.Url_productos + 'deleteProducto',
      productoP,
      header
    );
  }

  reducirCantProducto(productoP: Producto, cant: number) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    return this._http.post(
      this.Url_productos + 'reducirCantProducto/' + cant,
      productoP,
      header
    );
  }

  aumentarCantProducto(productoP: Producto) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    return this._http.post(
      this.Url_productos + 'aumentarCantProducto',
      productoP,
      header
    );
  }

  //CARRITO-------------------------------------
  agregarProdCarrito(persona: Persona, producto: Producto, cant: number) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    let prodId = producto.id;
    return this._http.post(
      this.Url_carritos + 'agregarProdCarrito/' + prodId + '/' + cant,
      persona,
      header
    );
  }

  eliminarProdCarrito(persona: Persona, producto: Producto) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    let prodId = producto.id;
    return this._http.post(
      this.Url_carritos + 'eliminarProdCarrito/' + prodId,
      persona,
      header
    );
  }

  vaciarCarrito(persona: Persona) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    return this._http.post(
      this.Url_carritos + 'vaciarCarrito',
      persona,
      header
    );
  }

  //COMPRA-------------------------------------
  saveCompra(compraP: Compra, usuario: Persona) {
    var token = this._sessionStorage.getToken();
    token = token ? token : '';
    var header = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    let personaEmail = usuario.email;
    return this._http.post(
      this.Url_compras + 'saveCompra/' + personaEmail,
      compraP,
      header
    );
  }
}
