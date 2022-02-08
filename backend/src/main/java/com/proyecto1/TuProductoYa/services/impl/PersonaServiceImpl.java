package com.proyecto1.TuProductoYa.services.impl;

import java.util.List;

import com.proyecto1.TuProductoYa.modelo.Carrito;
import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.modelo.exceptions.PersonaNotFoundException;
import com.proyecto1.TuProductoYa.repositorys.CarritoRepository;
import com.proyecto1.TuProductoYa.repositorys.PersonaRepository;
import com.proyecto1.TuProductoYa.services.PersonaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServiceImpl implements PersonaService {

  @Autowired
  PersonaRepository personaRepository;
  @Autowired
  CarritoRepository carritoRepository;

  @Override
  public List<Persona> getPersonas() {
    return personaRepository.findAll();
  }

  @Override
  public <S extends Persona> S savePersona(S persona) {
    Carrito carritoNuevo = new Carrito();
    carritoRepository.save(carritoNuevo);
    persona.setCarrito(carritoNuevo);
    return personaRepository.save(persona);
  }

  @Override
  public Persona getPersona(String emailP) {
    return personaRepository.findById(emailP).orElseThrow(() -> new PersonaNotFoundException(emailP));
  }

}
