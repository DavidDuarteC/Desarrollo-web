package com.proyecto1.TuProductoYa.modelo.exceptions;

import java.text.MessageFormat;

public class PersonaNotFoundException extends RuntimeException {

  public PersonaNotFoundException(final String email) {
    super(MessageFormat.format("Could not find person with email: {0}", email));
  }

}
