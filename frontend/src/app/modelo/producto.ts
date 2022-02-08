export class Producto{
    public id:number | undefined;
    public nombre:string | undefined;
    public imagen:string | undefined;
    public precio:number | undefined;
    public descuento:number | undefined;
    public cantidad:number | undefined;
    public descripcion:string | undefined;

    constructor (id:number, nombre:string, imagen:string, precio:number, descuento:number, cantidad:number, descripcion:string){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.descuento = descuento;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
    }
    setCant(cant: number){
        this.cantidad = cant;
    }
    
}