import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../modelo/producto';
import { Router } from '@angular/router';
import { SessionstorageService } from '../sessionstorage.service';
import { Persona } from '../modelo/persona';

@Component({
  selector: 'app-pantalla-tienda',
  templateUrl: './pantalla-tienda.component.html',
  styleUrls: ['./pantalla-tienda.component.css'],
})
export class PantallaTiendaComponent {
  productos: any[] = [];
  public loggedin: boolean;
  public sesion: Persona;

  constructor(
    private _servicioProductos: ProductosService,
    private _router: Router,
    private _sessionstorage: SessionstorageService
  ) {
    this._servicioProductos.actualizarProductos();
    this.obtenerProductos();
    this.loggedin = this._sessionstorage.haySesion_sessionstorage();
    this.sesion = this._sessionstorage.obtenerSesion_sessionstorage();
  }

  async obtenerProductos(): Promise<void> {
    await new Promise((f) => setTimeout(f, 1000));
    this.productos = this._servicioProductos.getProductos();
    // console.log(this.productos);
  }

  verProducto(producto: Producto) {
    this._servicioProductos.productoVer = producto;
    this._router.navigate(['ver-producto']);
  }
}
