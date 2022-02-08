package com.proyecto1.TuProductoYa.seguridad;

import com.proyecto1.TuProductoYa.seguridad.jwt.JWTAuthenticationFilter;
import com.proyecto1.TuProductoYa.seguridad.jwt.JWTAuthorizationFilter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private MyAuthenticationProvider authenticationProvider;

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		/*
		 * 1. Se desactiva el uso de cookies 2. Se activa la configuración CORS con los
		 * valores por defecto 3. Se desactiva el filtro CSRF 4. Se indica que el login
		 * no requiere autenticación 5. Se indica que el resto de URLs esten securizadas
		 */
		httpSecurity.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().cors().and().headers()
				.frameOptions().disable().and().csrf().disable()// sdffjkfljsdklfjsñldkfjsdlkñfjslkñdfj
				// .authorizeRequests().antMatchers("/login", "/h2/**").permitAll()

				// .authorizeRequests().antMatchers("/login", "/h2/**",
				// "/personas/**").permitAll()

				.authorizeRequests().antMatchers("/**").permitAll()// lsakjñdfkljsdlkdfdjsa
				.anyRequest().authenticated().and().addFilter(new JWTAuthenticationFilter(authenticationManager()))
				.addFilter(new JWTAuthorizationFilter(authenticationManager()));
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
		// auth.authenticationProvider(authenticationProvider);
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}