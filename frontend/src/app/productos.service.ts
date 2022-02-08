import { Injectable } from '@angular/core';
import { APIService } from './API.service';
import { Producto } from './modelo/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public productosQuemados: Producto[] = [];
  public productos: any;
  public productoVer: Producto | undefined;
  public productoMod: Producto | undefined;

  constructor(public _API: APIService) {
    console.log('ProductosService Funcionando');
    this.actualizarProductos();
    this.async_print_productos(this.productos);
  }
  async async_print_productos(productos: any) {
    await new Promise((f) => setTimeout(f, 1000));
    console.log('productosService#printProductos: ');
    console.log(this.productos);
    console.log('------------------');
  }

  reducirCantProducto(producto: Producto, cant: number) {
    this._API.reducirCantProducto(producto, cant).subscribe(
      (resp) => {
        console.log('reducirCantProducto del prod con id: ' + producto.id);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  aumentarCantProducto(producto: Producto) {
    this._API.aumentarCantProducto(producto).subscribe(
      (resp) => {
        console.log('aumentarCantProducto del prod con id: ' + producto.id);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  actualizarProductos() {
    this._API.getProductos().subscribe(
      (resp) => {
        this.productos = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  modificarProducto(productoP: Producto, productoNuevo: Producto) {
    this._API.modifyProducto(productoNuevo).subscribe(
      (resp) => {
        console.log('Se modifico el producto');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  agregarProducto(productoP: Producto) {
    this._API.saveProducto(productoP).subscribe(
      (resp) => {
        console.log('Se guadro un producto');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminarProducto(productoP: Producto) {
    this._API.deleteProducto(productoP).subscribe();
  }

  buscarProducto(nombre: string) {
    for (let producto of this.productos) {
      if (nombre == producto.nombre) {
        return true;
      }
    }
    return false;
  }

  obtenerProducto(idP: number) {
    for (let producto of this.productos) {
      if (idP == producto.id) {
        return producto;
      }
    }
    return undefined;
  }

  getProductos() {
    return this.productos;
  }
}
