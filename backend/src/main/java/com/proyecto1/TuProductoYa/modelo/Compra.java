package com.proyecto1.TuProductoYa.modelo;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Compra implements Serializable {

    @Id
    @GeneratedValue
    private Long idCompra;
    @Basic
    @NotNull
    private Date fecha;
    @Basic
    @NotNull
    private long total;
    @OneToOne
    private Carrito carrito;
    @Basic
    @NotNull
    private int cantProductos;

    public Long getIdCompra() {
        return idCompra;
    }

    public int getCantProductos() {
        return cantProductos;
    }

    public void setCantProductos(int cantProductos) {
        this.cantProductos = cantProductos;
    }

    public void setIdCompra(Long idCompra) {
        this.idCompra = idCompra;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public Carrito getCarrito() {
        return carrito;
    }

    public void setCarrito(Carrito carrito) {
        this.carrito = carrito;
    }

    public void setPersona(Persona persona) {
        this.carrito.setPersona(persona);
    }

}