package com.proyecto1.TuProductoYa.services;

import java.util.List;

import com.proyecto1.TuProductoYa.modelo.Producto;

public interface ProductoService {

  List<Producto> getProductos();

  public <S extends Producto> S saveProducto(S producto);

  public Producto modifyProducto(Producto producto);

  public Producto getProducto(Long id);

  void deleteProducto(Producto producto);

  void reducirCantProducto(Producto producto, int cant);
}
