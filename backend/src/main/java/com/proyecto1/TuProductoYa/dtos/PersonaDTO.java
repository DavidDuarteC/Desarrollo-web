package com.proyecto1.TuProductoYa.dtos;

import java.util.List;

public class PersonaDTO {
  public String nombre;
  public String email;
  public String contrasena;
  public String rol;
  public CarritoDTO carrito;
  public List<CompraDTO> compras;

  @Override
  public String toString() {
    return "{" + " nombre='" + getNombre() + "'" + ", email='" + getEmail() + "'" + ", contrasena='" + getContrasena()
        + "'" + ", rol='" + getRol() + "'" + ", carrito='" + getCarrito() + "'" + ", compras='" + getCompras() + "'"
        + "}";
  }

  public PersonaDTO() {
  }

  public PersonaDTO(String nombre, String email, String contrasena, String rol, CarritoDTO carrito,
      List<CompraDTO> compras) {
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.rol = rol;
    this.carrito = carrito;
    this.compras = compras;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getContrasena() {
    return contrasena;
  }

  public void setContrasena(String contrasena) {
    this.contrasena = contrasena;
  }

  public String getRol() {
    return rol;
  }

  public void setRol(String rol) {
    this.rol = rol;
  }

  public CarritoDTO getCarrito() {
    return carrito;
  }

  public void setCarrito(CarritoDTO carrito) {
    this.carrito = carrito;
  }

  public List<CompraDTO> getCompras() {
    return compras;
  }

  public void setCompras(List<CompraDTO> compras) {
    this.compras = compras;
  }

}
