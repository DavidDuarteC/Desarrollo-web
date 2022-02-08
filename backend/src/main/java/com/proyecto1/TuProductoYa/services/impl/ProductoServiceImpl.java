package com.proyecto1.TuProductoYa.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

import com.proyecto1.TuProductoYa.modelo.Producto;
import com.proyecto1.TuProductoYa.modelo.exceptions.ProductoNotFoundException;
import com.proyecto1.TuProductoYa.repositorys.ProductoRepository;
import com.proyecto1.TuProductoYa.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoServiceImpl implements ProductoService {

  @Autowired
  ProductoRepository productosRepository;

  @Override
  public List<Producto> getProductos() {
    List<Producto> productos = new ArrayList<>();
    Iterator<Producto> res = productosRepository.findAll().iterator();
    while (res.hasNext()) {
      productos.add(res.next());
    }
    return productos;
  }

  @Override
  public <S extends Producto> S saveProducto(S producto) {
    return productosRepository.save(producto);
  }

  @Transactional
  public Producto modifyProducto(Producto producto) {
    Producto productoAEditar = getProducto(producto.getId());
    productoAEditar.setDescuento(producto.getDescuento());
    productoAEditar.setPrecio(producto.getPrecio());
    productoAEditar.setImagen(producto.getImagen());
    productoAEditar.setNombre(producto.getNombre());
    productoAEditar.setDescripcion(producto.getDescripcion());
    productoAEditar.setCantidad(producto.getCantidad());
    productosRepository.save(productoAEditar);
    return productoAEditar;
  }

  @Override
  public Producto getProducto(Long id) {
    return productosRepository.findById(id).orElseThrow(() -> new ProductoNotFoundException(id));
  }

  @Override
  public void deleteProducto(Producto producto) {
    productosRepository.deleteById(producto.getId());
  }

  @Override
  public void reducirCantProducto(Producto producto, int cant) {
    producto.setCantidad(producto.getCantidad() - cant);
    productosRepository.save(producto);
  }

}
