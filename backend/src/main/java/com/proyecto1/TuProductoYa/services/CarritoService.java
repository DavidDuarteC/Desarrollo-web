package com.proyecto1.TuProductoYa.services;

import com.proyecto1.TuProductoYa.modelo.Carrito;
import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.modelo.Producto;

public interface CarritoService {
  Carrito agregarProdCarrito(Producto producto, Persona persona, int cant);

  Carrito getCarrito(Long id);

  // @Return: cantidad del producto eliminado, en el carrito de la persona
  int eliminarProdCarrito(Producto producto, Persona persona);

  void vaciarCarrito(Long carritoId);
}
