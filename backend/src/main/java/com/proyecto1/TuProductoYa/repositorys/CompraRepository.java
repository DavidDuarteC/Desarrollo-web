package com.proyecto1.TuProductoYa.repositorys;

import java.util.List;

import com.proyecto1.TuProductoYa.modelo.Compra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long> {

  @Query("SELECT c FROM Compra c WHERE c.carrito.id = ?1")
  public List<Compra> findByCarrito(Long idCarrito);

}
