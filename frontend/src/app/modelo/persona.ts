import { Carrito } from "./carrito";
import { Compra } from "./compra";

export class Persona{
    public nombre:string;
    public email:string | undefined;
    public contrasena:string | undefined;
    public rol:string | undefined;
    public carrito: Carrito | undefined;
    public compras: Compra [];
    constructor (nombre:string, email:string, contrasena:string, rol:string, carrito:Carrito, compras: Compra[]){
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
        this.rol = rol;
        this.carrito = carrito;
        this.compras = compras;
    }
    
}