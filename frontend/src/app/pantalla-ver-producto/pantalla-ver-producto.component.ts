import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { APIService } from '../API.service';
import { Persona } from '../modelo/persona';
import { Producto } from '../modelo/producto';
import { PersonaService } from '../persona.service';
import { ProductosService } from '../productos.service';
import { SessionstorageService } from '../sessionstorage.service';
@Component({
  selector: 'app-pantalla-ver-producto',
  templateUrl: './pantalla-ver-producto.component.html',
  styleUrls: ['./pantalla-ver-producto.component.css'],
})
export class PantallaVerProductoComponent implements OnInit {
  productoVer: any;
  public loggedin: boolean;
  public sesion: Persona;
  cantP: number = 1;

  constructor(
    public _productosService: ProductosService,
    public _personasService: PersonaService,
    private router: Router,
    private _sessionstorage: SessionstorageService,
    public _API: APIService
  ) {
    this.loggedin = this._sessionstorage.haySesion_sessionstorage();
    this.sesion = this._sessionstorage.obtenerSesion_sessionstorage();
    if (this._productosService.productoVer)
      this.productoVer = this._productosService.productoVer;
    if (this.productoVer == undefined) this.router.navigate(['inicio']);
  }

  ngOnInit(): void {}
  async agregarCarrito() {
    var persona: Persona;
    var bandera: Boolean = false;
    persona = this._sessionstorage.obtenerSesion_sessionstorage();
    var compraProducto: Producto = this.productoVer;
    persona.carrito?.productos.forEach((producto) => {
      if (producto.id == compraProducto.id) {
        producto.cantidad! += this.cantP!;
        bandera = true;
      }
    });
    this._productosService.reducirCantProducto(compraProducto, this.cantP);
    if (bandera != true) {
      compraProducto.cantidad = Number(this.cantP);
      persona.carrito?.productos.push(compraProducto);
    }
    this._personasService.agregarProdCarrito(
      persona,
      compraProducto,
      this.cantP
    );
    this._sessionstorage.iniciarSesion_sessionstorage(persona);
    Swal.fire(
      'Agregado al carrito',
      'Se ha agregar el producto al carrito con exito',
      'success'
    );
    await new Promise((f) => setTimeout(f, 2000));
    this.router.navigate(['/tienda']);
    // window.location.reload();
  }
}
