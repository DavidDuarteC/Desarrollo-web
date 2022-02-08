package com.proyecto1.TuProductoYa.modelo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@Entity
public class Persona {

    @Basic
    @NotNull
    private String nombre;

    @Id
    @NotNull
    private String email;

    @Basic
    @NotNull
    private String contrasena;

    @Basic
    @NotNull
    private String rol;

    @Null
    @OneToOne
    @JoinColumn(name = "id_carrito", referencedColumnName = "id")
    private Carrito carrito;

    @Transient
    private List<Compra> compras = new ArrayList<>();

    @Override
    public String toString() {
        return "email: " + this.email + ", carrito: " + this.carrito;
    }

    public void addCompra(Compra compra) {
        this.compras.add(compra);
    }

    public List<Compra> getCompras() {
        return compras;
    }

    public void setCompras(List<Compra> compras) {
        this.compras = compras;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public void setCarrito(Carrito carrito) {
        this.carrito = carrito;
    }

    public Carrito getCarrito() {
        return carrito;
    }

    public String getRol() {
        return rol;
    }

}