import { Carrito } from './carrito';

export class Compra {
  public carrito: Carrito;
  public fecha: Date;
  public total: number;
  public cantProductos: number;
  constructor(
    carrito: Carrito,
    fecha: Date,
    total: number,
    cantProductos: number
  ) {
    this.carrito = carrito;
    this.fecha = fecha;
    this.total = total;
    this.cantProductos = cantProductos;
  }
}
