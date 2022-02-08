package com.proyecto1.TuProductoYa;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.proyecto1.TuProductoYa.modelo.Carrito;
import com.proyecto1.TuProductoYa.modelo.Persona;
import com.proyecto1.TuProductoYa.modelo.Producto;
import com.proyecto1.TuProductoYa.repositorys.CarritoRepository;
import com.proyecto1.TuProductoYa.repositorys.CompraRepository;
import com.proyecto1.TuProductoYa.repositorys.PersonaRepository;
import com.proyecto1.TuProductoYa.repositorys.ProductoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
class LoadData {

  @Bean
  CommandLineRunner initDatabase(PersonaRepository personaRepository, ProductoRepository productoRepository,
      CarritoRepository carritoRepository, CompraRepository compraRepository, PasswordEncoder passwordEncoder) {
    return args -> {
      System.out.println("Cargando información...");
      Producto producto = new Producto();
      producto.setId((long) 1);
      producto.setNombre("Soporte plegable de aluminio");
      producto.setImagen("assets/img/soporte-plateado.jpg");
      producto.setPrecio(120000);
      producto.setDescuento(0.5);
      producto.setCantidad(0);
      producto.setDescripcion("Soporte plegable para tabletas, MacBook Notebook, iPad, Laptops, PC, Libros y más.");
      productoRepository.save(producto);

      producto.setId((long) 2);
      producto.setNombre("Soporte plegable para celular PRO");
      producto.setImagen("assets/img/SoportePlegableCelularPro.jpg");
      producto.setPrecio(110000);
      producto.setDescuento(0.5);
      producto.setCantidad(10);
      producto.setDescripcion(
          "Ángulo de visión ajustable: múltiples ángulos se pueden ajustar (rotación de 270 grados) para satisfacer tus diferentes demandas de visualización. Te hace manos libres para disfrutar de tus juegos, vídeos y Facetime.");
      productoRepository.save(producto);

      producto.setId((long) 3);
      producto.setNombre("Soporte plegable para celular LITE");
      producto.setImagen("assets/img/SoportePlegableCelularLite.jpg");
      producto.setPrecio(100000);
      producto.setDescuento(0.5);
      producto.setCantidad(10);
      producto.setDescripcion("Versión más pequeña y economica que el soporte para celular PRO.");
      productoRepository.save(producto);

      producto.setId((long) 4);
      producto.setNombre("Soporte de Apple Watch");
      producto.setImagen("assets/img/SoporteAppleWatch.jpg");
      producto.setPrecio(100000);
      producto.setDescuento(0.5);
      producto.setCantidad(10);
      producto.setDescripcion(
          "Hecho de material de silicona de calidad, a prueba de caídas, antideslizante y muy duradero para un uso prolongado.");
      productoRepository.save(producto);

      Carrito carritoNuevo = new Carrito();
      List<Producto> productosCarrito = new ArrayList<>();
      productosCarrito.add(producto);

      carritoNuevo.setProductos(productosCarrito);
      carritoRepository.save(carritoNuevo);

      Persona usuario1 = new Persona();
      usuario1.setNombre("Julian Rizo");
      usuario1.setEmail("jr.rizo.o.jr@gmail.com");
      // usuario1.setContrasena("1234");
      usuario1.setContrasena(passwordEncoder.encode("1234"));
      usuario1.setRol("admin");
      usuario1.setCarrito(carritoNuevo);

      Carrito carritoNuevo2 = new Carrito();
      List<Producto> productosCarrito2 = new ArrayList<>();
      productosCarrito2.add(producto);
      carritoNuevo.setProductos(productosCarrito2);
      carritoRepository.save(carritoNuevo2);
      Persona usuario2 = new Persona();
      usuario2.setNombre("David Duarte");
      usuario2.setEmail("davi@gmail.com");
      // usuario2.setContrasena("1234");
      usuario2.setContrasena(passwordEncoder.encode("1234"));
      usuario2.setRol("user");
      usuario2.setCarrito(carritoNuevo2);

      personaRepository.save(usuario1);
      personaRepository.save(usuario2);

      System.out.println("Termina el cargue de información.");
    };
  }

  Date getDate(String fecha) throws ParseException {
    DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    return dateFormat.parse(fecha);
  }

}
