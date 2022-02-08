package com.proyecto1.TuProductoYa.controllers;

import java.util.ArrayList;
import java.util.List;

import com.proyecto1.TuProductoYa.dtos.CompraDTO;
import com.proyecto1.TuProductoYa.modelo.Compra;
import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.services.CarritoService;
import com.proyecto1.TuProductoYa.services.CompraService;
import com.proyecto1.TuProductoYa.services.PersonaService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("compras")
public class CompraController {
  @Autowired
  private CompraService compraService;

  @Autowired
  private ModelMapper mapper;

  @Autowired
  private PersonaService personaService;

  @Autowired
  private CarritoService carritoService;

  @Secured({ "ROLE_user" })
  @PostMapping("saveCompra/{reqPersonaEmail}")
  public void saveCompras(@RequestBody CompraDTO reqCompra, @PathVariable String reqPersonaEmail) {
    Compra compra = new Compra();
    Persona persona = new Persona();
    persona = personaService.getPersona(reqPersonaEmail);
    compra = mapper.map(reqCompra, Compra.class);

    compra.setPersona(persona);
    compra.setCarrito(persona.getCarrito());
    compra.setCantProductos(persona.getCarrito().getProductos().size());

    carritoService.vaciarCarrito(persona.getCarrito().getId());

    compra = compraService.saveCompra(compra);
  }

}
