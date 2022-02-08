package com.proyecto1.TuProductoYa.controllers;

import com.proyecto1.TuProductoYa.dtos.CarritoDTO;
import com.proyecto1.TuProductoYa.dtos.PersonaDTO;
import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.modelo.Producto;
import com.proyecto1.TuProductoYa.services.CarritoService;
import com.proyecto1.TuProductoYa.services.ProductoService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("carritos")
public class CarritoController {
  @Autowired
  private CarritoService carritoService;

  @Autowired
  private ProductoService productoService;

  @Autowired
  private ModelMapper mapper;

  @Secured({ "ROLE_user" })
  @PostMapping("agregarProdCarrito/{reqProductoId}/{reqCant}")
  public CarritoDTO agregarProdCarrito(@RequestBody PersonaDTO reqPersona, @PathVariable final Long reqProductoId,
      @PathVariable final int reqCant) {
    Persona persona = new Persona();
    Producto producto = new Producto();
    persona = mapper.map(reqPersona, Persona.class);
    producto = productoService.getProducto(reqProductoId);
    return mapper.map(carritoService.agregarProdCarrito(producto, persona, reqCant), CarritoDTO.class);
  }

  @Secured({ "ROLE_user" })
  @PostMapping("eliminarProdCarrito/{reqProductoId}")
  public void eliminarProdCarrito(@RequestBody PersonaDTO reqPersona, @PathVariable final Long reqProductoId) {
    Producto producto = new Producto();
    Persona persona = new Persona();
    persona = mapper.map(reqPersona, Persona.class);
    producto = productoService.getProducto(reqProductoId);
    carritoService.eliminarProdCarrito(producto, persona);
  }

  @Secured({ "ROLE_user" })
  @PostMapping("vaciarCarrito")
  public void vaciarCarrito(@RequestBody PersonaDTO reqPersona) {
    Persona persona = new Persona();
    persona = mapper.map(reqPersona, Persona.class);
    carritoService.vaciarCarrito(persona.getCarrito().getId());
  }

}
