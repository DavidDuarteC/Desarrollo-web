package com.proyecto1.TuProductoYa.dtos;

import com.proyecto1.TuProductoYa.modelo.Producto;

public class ProductoDTO {
  public Long id;
  public String nombre;
  public String imagen;
  public long precio;
  public double descuento;
  public int cantidad;
  public String descripcion;

  @Override
  public String toString() {
    return "{" + " id='" + getId() + "'" + ", nombre='" + getNombre() + "'" + ", imagen='" + getImagen() + "'"
        + ", precio='" + getPrecio() + "'" + ", descuento='" + getDescuento() + "'" + ", cantidad='" + getCantidad()
        + "'" + ", descripcion='" + getDescripcion() + "'" + "}";
  }

  public ProductoDTO() {
  }

  public ProductoDTO(Long id, String nombre, String imagen, int precio, float descuento, int cantidad,
      String descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.descuento = descuento;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public String getImagen() {
    return imagen;
  }

  public void setImagen(String imagen) {
    this.imagen = imagen;
  }

  public int getCantidad() {
    return cantidad;
  }

  public void setCantidad(int cantidad) {
    this.cantidad = cantidad;
  }

  public String getDescripcion() {
    return descripcion;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }

  public long getPrecio() {
    return precio;
  }

  public void setPrecio(long precio) {
    this.precio = precio;
  }

  public double getDescuento() {
    return descuento;
  }

  public void setDescuento(double d) {
    this.descuento = d;
  }

}
