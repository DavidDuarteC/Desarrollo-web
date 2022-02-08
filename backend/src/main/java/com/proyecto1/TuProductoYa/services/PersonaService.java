package com.proyecto1.TuProductoYa.services;

import java.util.List;

import com.proyecto1.TuProductoYa.modelo.Persona;

public interface PersonaService {

  List<Persona> getPersonas();

  public <S extends Persona> S savePersona(S entity);

  Persona getPersona(String emailP);

}
