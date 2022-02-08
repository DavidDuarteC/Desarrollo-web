package com.proyecto1.TuProductoYa.modelo;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

public class ProductoXCarrito {
  @Id
  @GeneratedValue
  @Column(unique = true)
  @NotNull
  Long id;

  @ManyToOne
  @JoinColumn(name = "carrito_id")
  Carrito carrito;

  @ManyToOne
  @JoinColumn(name = "producto_id")
  Producto producto;

  public ProductoXCarrito() {
  }

  public ProductoXCarrito(@NotNull Long id, Carrito carrito, Producto producto) {
    this.id = id;
    this.carrito = carrito;
    this.producto = producto;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Carrito getCarrito() {
    return carrito;
  }

  public void setCarrito(Carrito carrito) {
    this.carrito = carrito;
  }

  public Producto getProducto() {
    return producto;
  }

  public void setProducto(Producto producto) {
    this.producto = producto;
  }

}
