import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { APIService } from '../API.service';
import { Compra } from '../modelo/compra';
import { Persona } from '../modelo/persona';
import { Producto } from '../modelo/producto';
import { PersonaService } from '../persona.service';
import { ProductosService } from '../productos.service';
import { SessionstorageService } from '../sessionstorage.service';

@Component({
  selector: 'app-pantalla-carrito',
  templateUrl: './pantalla-carrito.component.html',
  styleUrls: ['./pantalla-carrito.component.css'],
})
export class PantallaCarritoComponent implements OnInit {
  public sesion: Persona;
  productos: Producto[] = [];
  total: any = 0;
  tam: any = 0;
  iva: any = 0.16;
  cant: number = 0;
  max: number = 0;
  constructor(
    public _sessionstorage: SessionstorageService,
    public _productosService: ProductosService,
    public _localstorage: APIService,
    public _personaService: PersonaService
  ) {
    this.sesion = this._sessionstorage.obtenerSesion_sessionstorage();
    this.productos = this.sesion.carrito?.productos!;
    this.calcularTotal();
  }

  ngOnInit(): void {}
  calcularTotal() {
    this.total = 0;
    this.tam = 0;
    this.cant = 0;
    if (this.productos!.length! > 0) {
      this.productos.forEach((producto) => {
        if (producto.cantidad! > 1) {
          this.cant =
            producto.precio! * producto.descuento! * producto.cantidad!;
          this.total = this.total + this.cant;
        } else {
          this.total += producto.precio! * producto.descuento!;
        }
        this.tam += producto.cantidad;
      });
    }
  }

  eliminarProducto(prodAEliminar: Producto) {
    this._personaService.eliminarProdCarrito(this.sesion, prodAEliminar);
    for (let i = 0; i < this.productos!.length; i++) {
      if (this.productos[i].id == prodAEliminar.id) {
        this.productos.splice(i, 1);
        break;
      }
    }
    this.sesion.carrito!.productos = this.productos;
    this._sessionstorage.iniciarSesion_sessionstorage(this.sesion);
    this.calcularTotal();
  }

  async comprarCarrito() {
    var fecha: Date = new Date();
    var cantProductos = 0;
    for (let prod of this.sesion.carrito!.productos) {
      cantProductos += prod.cantidad!;
    }
    var compra: Compra = new Compra(
      this.sesion.carrito!,
      fecha,
      this.total * this.iva + this.total,
      cantProductos
    );
    this._personaService.saveCompra(this.sesion, compra);
    var productosV: Producto[] = [];
    this.sesion.carrito!.productos = productosV;
    this.sesion.compras.push(compra);
    this._sessionstorage.iniciarSesion_sessionstorage(this.sesion);
    Swal.fire(
      'Pago Exitoso',
      'Se ha llevado a cabo con exito tu compra',
      'success'
    );
    await new Promise((f) => setTimeout(f, 1000));
    window.location.reload();
  }
  onChange($event: Event, producto: Producto) {}
}
