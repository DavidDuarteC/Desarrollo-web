import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from '../modelo/producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-pantalla-editar-producto',
  templateUrl: './pantalla-editar-producto.component.html',
  styleUrls: ['./pantalla-editar-producto.component.css'],
})
export class PantallaEditarProductoComponent implements OnInit {
  public producto: any;
  public productoAntiguo: any;
  constructor(
    private router: Router,
    public _servicioProductos: ProductosService
  ) {
    this.producto = _servicioProductos.productoMod;
    if (this.producto == undefined) this.router.navigate(['inicio']);
    else this.productoAntiguo = this.producto;
  }

  ngOnInit(): void {}

  formSubmitEditarProducto() {
    this._servicioProductos.modificarProducto(
      this.productoAntiguo,
      this.producto
    );
    Swal.fire('Producto modificado correctamente');
    setTimeout(() => {
      this.router.navigate(['crud']);
    }, 1000);
  }
}
