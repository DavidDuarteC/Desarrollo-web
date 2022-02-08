package com.proyecto1.TuProductoYa.services.impl;

import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.repositorys.PersonaRepository;
import com.proyecto1.TuProductoYa.services.PersonaService;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    private PersonaRepository usuaRepository;

    @Autowired
    private PersonaService personaService;

    public UserDetailServiceImpl(PersonaRepository usuaRepository) {
        this.usuaRepository = usuaRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub

        Persona usuario = personaService.getPersona(username);

        if (usuario == null) {
            throw new UsernameNotFoundException(username);
        }

        List<SimpleGrantedAuthority> roles = getRoles(usuario);
        // return null;

        return new org.springframework.security.core.userdetails.User(usuario.getEmail(), usuario.getContrasena(),
                roles);
    }

    private List<SimpleGrantedAuthority> getRoles(Persona usuario) {
        List<SimpleGrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority("ROLE_" + usuario.getRol()));

        return roles;
    }

}
