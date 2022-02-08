package com.proyecto1.TuProductoYa.services.impl;

import javax.transaction.Transactional;

import com.proyecto1.TuProductoYa.modelo.Carrito;
import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.modelo.Producto;
import com.proyecto1.TuProductoYa.modelo.exceptions.CarritoNotFoundException;
import com.proyecto1.TuProductoYa.repositorys.CarritoRepository;
import com.proyecto1.TuProductoYa.repositorys.PersonaRepository;
import com.proyecto1.TuProductoYa.services.CarritoService;
import com.proyecto1.TuProductoYa.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarritoServiceImpl implements CarritoService {
  @Autowired
  CarritoRepository carritoRepository;

  @Autowired
  ProductoService productoService;

  @Autowired
  PersonaRepository personaRepository;

  @Override
  @Transactional
  public Carrito agregarProdCarrito(Producto producto, Persona persona, int cant) {
    Carrito carrito = getCarrito(persona.getCarrito().getId());
    carrito.agregarProducto(producto, cant);
    persona.setCarrito(carrito);
    personaRepository.save(persona);
    return carrito;
  }

  @Override
  public Carrito getCarrito(Long id) {
    return carritoRepository.findById(id).orElseThrow(() -> new CarritoNotFoundException(id));
  }

  @Transactional
  public Carrito quitarDeCarrito(Long carritoId, Long productoId) {
    Carrito cart = getCarrito(carritoId);
    Producto item = productoService.getProducto(productoId);
    cart.borrarProducto(item);
    return cart;
  }

  @Override
  public void vaciarCarrito(Long carritoId) {
    Carrito cart = getCarrito(carritoId);
    for (int i = 0; i < cart.getProductos().size(); i++) {
      quitarDeCarrito(carritoId, cart.getProductos().get(i).getId());
    }
  }

  @Override
  @Transactional
  public int eliminarProdCarrito(Producto producto, Persona persona) {
    Carrito carrito = getCarrito(persona.getCarrito().getId());
    int cant = carrito.borrarProducto(producto);
    persona.setCarrito(carrito);
    personaRepository.save(persona);

    producto.setCantidad(producto.getCantidad() + cant);
    productoService.saveProducto(producto);
    return cant;
  }
}
