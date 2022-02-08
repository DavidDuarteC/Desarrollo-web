package com.proyecto1.TuProductoYa.modelo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotNull;

import com.proyecto1.TuProductoYa.dtos.ProductoDTO;

@Entity
public class Producto {

    @Id
    @GeneratedValue
    private Long id;
    @Basic
    @NotNull
    private String nombre;
    @Basic
    @NotNull
    @Column(length = 200000000)
    private String imagen;
    @Basic
    @NotNull
    private long precio;
    @Basic
    @NotNull
    private double descuento;
    @Basic
    @NotNull
    private int cantidad;
    @Basic
    @NotNull
    private String descripcion;

    @ManyToMany(mappedBy = "productos")
    private List<Carrito> carritos = new ArrayList<>();

    @Override
    public String toString() {
        return "id: " + this.id + ", nombre: " + this.nombre + ", cantidad: " + this.cantidad;
    }

    public Producto() {
    }

    public Producto(Long id, @NotNull String nombre, @NotNull String imagen, @NotNull long precio,
            @NotNull double descuento, @NotNull int cantidad, @NotNull String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.descuento = descuento;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public long getPrecio() {
        return precio;
    }

    public void setPrecio(long precio) {
        this.precio = precio;
    }

    public int getCantidad() {
        return cantidad;
    }

    public double getDescuento() {
        return descuento;
    }

    public void setDescuento(double d) {
        this.descuento = d;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}