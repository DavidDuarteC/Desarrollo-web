import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../API.service';
import { Producto } from '../modelo/producto';
import { ProductosService } from '../productos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pantalla-crud',
  templateUrl: './pantalla-crud.component.html',
  styleUrls: ['./pantalla-crud.component.css'],
})
export class PantallaCrudComponent implements OnInit {
  public producto: Producto = new Producto(0, '', '', 0, 0, 0, '');
  productos: any[] = [];
  previsualizacion: any;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    public _servicioProductos: ProductosService,
    public _localstorage: APIService
  ) {
    // this._servicioProductos.actualizarProductos();
    // this.productos = _servicioProductos.getProductos();
    // this.async_print_productos(this.productos);
  }

  async async_print_productos(productos: any) {
    await new Promise((f) => setTimeout(f, 1000));
    console.log(this.productos);
  }

  async ngOnInit(): Promise<void> {
    this._servicioProductos.actualizarProductos();
    await new Promise((f) => setTimeout(f, 1000));
    this.productos = this._servicioProductos.getProductos();
    this.async_print_productos(this.productos);
  }

  onChange($event: Event) {
    const archivoCapturado = ($event.target as HTMLInputElement)?.files?.[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    });
  }

  async formSubmitAgregarProducto() {
    if (
      this.producto.nombre
      //  &&
      // this._servicioProductos.buscarProducto(this.producto.nombre) == false
    ) {
      // let bannerImage = document.getElementById('bannerImg');
      this.producto.imagen = this.previsualizacion;
      this._servicioProductos.agregarProducto(this.producto);
      Swal.fire('Producto guardado correctamente');
      await new Promise((f) => setTimeout(f, 1000));
      // alert("Producto guardado correctamente");
      this.producto = new Producto(0, '', '', 0, 0, 0, '');
      window.location.reload();
    } else {
      Swal.fire('No se pudo grabar producto');
      // alert("No se pudo grabar producto");
    }
  }

  iraEditarProducto(productoP: Producto) {
    this._servicioProductos.productoMod = productoP;
    this.router.navigate(['editar-producto']);
  }

  clickEliminarProducto(producto: Producto) {
    console.log(producto);

    this._servicioProductos.eliminarProducto(producto);

    // await new Promise((f) => setTimeout(f, 1000));
    Swal.fire('Producto eliminado correctamente');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
        return true;
      } catch (e) {
        return null;
      }
    });
}
