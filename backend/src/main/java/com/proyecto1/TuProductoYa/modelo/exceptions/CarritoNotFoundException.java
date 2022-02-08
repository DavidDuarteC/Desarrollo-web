package com.proyecto1.TuProductoYa.modelo.exceptions;

import java.text.MessageFormat;

public class CarritoNotFoundException extends RuntimeException {

  public CarritoNotFoundException(final Long id) {
    super(MessageFormat.format("Could not find cart with id: {0}", id));
  }

}
