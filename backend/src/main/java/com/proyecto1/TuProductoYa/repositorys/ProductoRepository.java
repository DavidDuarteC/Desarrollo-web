package com.proyecto1.TuProductoYa.repositorys;

import com.proyecto1.TuProductoYa.modelo.Producto;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends CrudRepository<Producto, Long> {

}
