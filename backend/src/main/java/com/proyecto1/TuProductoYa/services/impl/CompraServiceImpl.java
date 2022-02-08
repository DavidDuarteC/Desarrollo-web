package com.proyecto1.TuProductoYa.services.impl;

import java.util.List;

import com.proyecto1.TuProductoYa.modelo.Compra;
import com.proyecto1.TuProductoYa.repositorys.CompraRepository;
import com.proyecto1.TuProductoYa.services.CompraService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompraServiceImpl implements CompraService {

  @Autowired
  CompraRepository compraRepository;

  @Override
  public Compra saveCompra(Compra compra) {
    return compraRepository.save(compra);
  }

  @Override
  public List<Compra> getCompras() {
    return compraRepository.findAll();
  }

  @Override
  public List<Compra> getComprasByIdCarrito(Long idCarrito) {
    return compraRepository.findByCarrito(idCarrito);
  }

}
