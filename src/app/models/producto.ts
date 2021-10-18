export interface Producto {
    id?: number;
    codigo: string;
    descripcion: string;
    categoria:string;
    stock: number;
    precioCompra:number;
    precioVenta:number;
}