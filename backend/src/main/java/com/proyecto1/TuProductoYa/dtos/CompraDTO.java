package com.proyecto1.TuProductoYa.dtos;

import java.sql.Date;

public class CompraDTO {
  public CarritoDTO carrito;
  public Date fecha;
  public long total;
  public int cantProductos;

  @Override
  public String toString() {
    return "{" + " carrito='" + getCarrito() + "'" + ", fecha='" + getFecha() + "'" + ", total='" + getTotal() + "'"
        + "}";
  }

  public int getCantProductos() {
    return this.cantProductos;
  }

  public void setCantProductos(int cantProductos) {
    this.cantProductos = cantProductos;
  }

  public CompraDTO() {
  }

  public CompraDTO(CarritoDTO carrito, Date fecha, long total) {
    this.carrito = carrito;
    this.fecha = fecha;
    this.total = total;
  }

  public CarritoDTO getCarrito() {
    return carrito;
  }

  public void setCarrito(CarritoDTO carrito) {
    this.carrito = carrito;
  }

  public Date getFecha() {
    return fecha;
  }

  public void setFecha(Date fecha) {
    this.fecha = fecha;
  }

  public long getTotal() {
    return total;
  }

  public void setTotal(long total) {
    this.total = total;
  }

}
