package com.proyecto1.TuProductoYa.repositorys;

import com.proyecto1.TuProductoYa.modelo.Carrito;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarritoRepository extends CrudRepository<Carrito, Long> {

}
