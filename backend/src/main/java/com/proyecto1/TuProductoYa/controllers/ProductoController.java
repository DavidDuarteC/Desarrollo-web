package com.proyecto1.TuProductoYa.controllers;

import java.util.ArrayList;
import java.util.List;

import com.proyecto1.TuProductoYa.dtos.ProductoDTO;
import com.proyecto1.TuProductoYa.modelo.Producto;
import com.proyecto1.TuProductoYa.services.ProductoService;

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
@RequestMapping("productos")
public class ProductoController {

  @Autowired
  private ProductoService productoService;

  @Autowired
  private ModelMapper mapper;

  // @Secured({ "ROLE_admin" })
  @GetMapping("getProductos")
  public List<ProductoDTO> obtenerProductos() {
    List<Producto> productos = productoService.getProductos();
    List<ProductoDTO> res = new ArrayList<>();
    for (int i = 0; i < productos.size(); i++) {
      res.add(mapper.map(productos.get(i), ProductoDTO.class));
    }
    return res;
  }

  @Secured({ "ROLE_admin" })
  @PostMapping("saveProducto")
  public void saveProducto(@RequestBody ProductoDTO req) {
    Producto producto = new Producto();
    producto = mapper.map(req, Producto.class);
    productoService.saveProducto(producto);
  }

  @Secured({ "ROLE_admin", "ROLE_user" })
  @PostMapping("reducirCantProducto/{reqCant}")
  public void reducirCantProducto(@RequestBody ProductoDTO req, @PathVariable int reqCant) {
    Producto producto = new Producto();
    producto = mapper.map(req, Producto.class);
    producto.setCantidad(producto.getCantidad() - reqCant);
    productoService.saveProducto(producto);
  }

  @Secured({ "ROLE_admin" })
  @PostMapping("modifyProducto")
  public Producto modifyProducto(@RequestBody ProductoDTO req) {
    Producto producto = new Producto();
    producto = mapper.map(req, Producto.class);
    return productoService.modifyProducto(producto);
  }

  @Secured({ "ROLE_admin" })
  @PostMapping("deleteProducto")
  public void deleteProducto(@RequestBody ProductoDTO req) {
    System.out.println("Llego el producto: " + req.getId());
    Producto producto = new Producto();
    producto = mapper.map(req, Producto.class);
    productoService.deleteProducto(producto);
  }

}
