package com.proyecto1.TuProductoYa.seguridad;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.repositorys.PersonaRepository;
import com.proyecto1.TuProductoYa.services.PersonaService;

@Component
public class MyAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private PersonaService personaService;

	@Transactional
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String username = authentication.getName();
		String password = authentication.getCredentials().toString();

		Persona usuario = personaService.getPersona(username);

		if (usuario == null) {
			throw new UsernameNotFoundException(username);
		}

		// if (encoder.matches(password, usuario.getContrasena()) &&
		// usuario.isActivo()){
		if (encoder.matches(password, usuario.getContrasena())) {

			List<SimpleGrantedAuthority> authorities = getAuthorities(usuario);

			// Crea el objeto principal
			org.springframework.security.core.userdetails.User principal = new org.springframework.security.core.userdetails.User(
					usuario.getEmail(), usuario.getContrasena(), authorities);

			return new UsernamePasswordAuthenticationToken(principal, null, authorities);
		}

		return null;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

	private List<SimpleGrantedAuthority> getAuthorities(Persona usuario) {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority("ROLE_" + usuario.getRol()));
		return authorities;
	}

}
