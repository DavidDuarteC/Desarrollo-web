package com.proyecto1.TuProductoYa.modelo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import java.text.MessageFormat;

@SuppressWarnings("serial")
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ProductoNotFoundException extends RuntimeException {

  public ProductoNotFoundException(Long id) {
    super("Estudiante no encontrado: " + id);
  }
}