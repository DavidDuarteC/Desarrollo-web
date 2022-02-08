package com.proyecto1.TuProductoYa.modelo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Carrito {

    @Id
    @GeneratedValue
    @Column(unique = true)
    @NotNull
    private Long id;

    @ManyToMany
    @JoinTable(name = "productoXcarrito", joinColumns = @JoinColumn(name = "id_carrito"), inverseJoinColumns = @JoinColumn(name = "id_producto"))
    private List<Producto> productos = new ArrayList<>();

    @OneToOne(mappedBy = "carrito")
    private Persona persona;

    @Override
    public String toString() {
        return "id: " + this.id + ", productos: " + this.productos;
    }

    public void agregarProducto(Producto producto, int cant) {
        for (int i = 0; i < cant; i++) {
            productos.add(producto);
        }
    }

    public boolean tieneProducto(Producto producto) {
        return productos.contains(producto);
    }

    public int borrarProducto(Producto producto) {
        int res = 0;
        if (tieneProducto(producto)) {
            for (int i = 0; i < productos.size(); i++) {
                if (this.productos.get(i).getId() == producto.getId()) {
                    this.productos.remove(i);
                    i--;
                    res++;
                }
            }

        }
        return res;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Carrito() {
    }

}
