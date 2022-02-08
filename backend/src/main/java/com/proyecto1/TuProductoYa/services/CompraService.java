package com.proyecto1.TuProductoYa.services;

import java.util.List;

import com.proyecto1.TuProductoYa.modelo.Compra;

public interface CompraService {

  List<Compra> getCompras();

  List<Compra> getComprasByIdCarrito(Long idCarrito);

  Compra saveCompra(Compra compra);

}
