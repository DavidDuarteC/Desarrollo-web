package com.proyecto1.TuProductoYa.modelo.exceptions;

import java.text.MessageFormat;

public class ProductoAlreadyAssignedException extends RuntimeException {
  public ProductoAlreadyAssignedException(final Long itemId, final Long cartId) {
    super(MessageFormat.format("Item: {0} is already assigned to cart: {1}", itemId, cartId));
  }
}
