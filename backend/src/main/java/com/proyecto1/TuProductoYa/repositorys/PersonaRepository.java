package com.proyecto1.TuProductoYa.repositorys;

import com.proyecto1.TuProductoYa.modelo.Persona;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, String> {
    // Optional<Persona> findByEmail(String email);
}
