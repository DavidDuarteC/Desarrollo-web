import { Producto } from './producto';

export class Carrito {
  public id: String | undefined;
  public productos: Producto[];
  constructor(productos: Producto[]) {
    this.productos = productos;
  }
}
