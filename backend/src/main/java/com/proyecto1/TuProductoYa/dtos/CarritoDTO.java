package com.proyecto1.TuProductoYa.dtos;

import java.util.List;

public class CarritoDTO {
  public Long id;
  public List<ProductoDTO> productos;

  @Override
  public String toString() {
    return "{" + " id='" + getId() + "'" + ", productos='" + getProductos() + "'" + "}";
  }

  public CarritoDTO() {
  }

  public Long getId() {
    return id;
  }

  public CarritoDTO(Long id, List<ProductoDTO> productos) {
    this.id = id;
    this.productos = productos;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public List<ProductoDTO> getProductos() {
    return productos;
  }

  public void setProductos(List<ProductoDTO> productos) {
    this.productos = productos;
  }

}
