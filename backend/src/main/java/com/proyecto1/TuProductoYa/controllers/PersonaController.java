package com.proyecto1.TuProductoYa.controllers;

import java.util.ArrayList;
import java.util.List;

import com.proyecto1.TuProductoYa.dtos.PersonaDTO;
import com.proyecto1.TuProductoYa.modelo.Compra;
import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.services.CompraService;
import com.proyecto1.TuProductoYa.services.PersonaService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.AbstractPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("personas")
public class PersonaController {

  @Autowired
  private PersonaService personaService;

  @Autowired
  private CompraService compraService;

  @Autowired
  private ModelMapper mapper;

  // private PasswordEncoder passwordEncoder = new PasswordEncoder();

  // @Secured({ "ROLE_admin" })
  @GetMapping("getPersonas")
  public List<PersonaDTO> obtenerPersonas() {
    List<Persona> personas = personaService.getPersonas();
    List<PersonaDTO> res = new ArrayList<>();
    for (int i = 0; i < personas.size(); i++) {
      List<Compra> compras = compraService.getComprasByIdCarrito(personas.get(i).getCarrito().getId());
      personas.get(i).setCompras(compras);
      res.add(mapper.map(personas.get(i), PersonaDTO.class));
    }
    return res;
  }

  // @Bean
  @PostMapping("savePersona")
  private void savePersona(@RequestBody PersonaDTO req) {
    PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
    Persona persona = new Persona();
    persona = mapper.map(req, Persona.class);

    String passEncoded = encoder.encode(persona.getContrasena());
    passEncoded = passEncoded.substring(passEncoded.indexOf("}") + 1);
    persona.setContrasena(passEncoded);

    personaService.savePersona(persona);
  }

  // @Bean
  // public BCryptPasswordEncoder bCryptPasswordEncoder(String pass) {
  // auth.inMemoryAuthentication().withUser("spring").password(encoder.encode("secret")).roles("USER");
  // }

}
