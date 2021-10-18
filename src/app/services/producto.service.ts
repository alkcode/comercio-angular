import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Global } from './global';
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ProductoService{

    private url:string;
    constructor( private http: HttpClient ){
        this.url = Global.url;
    }

    obtenerProductos(){
        return this.http.get(this.url+'/productos');
    }

    obtenerProducto(id:number){
        return this.http.get(this.url+'/producto/'+id);
    }

    guardarProductos(producto: Producto){
        return this.http.post(this.url+'/producto', producto);
    }

    eliminarProducto(id:number){
        return this.http.delete(this.url+'/producto/'+id);

    }

    actualizarProducto(id:number, productoActualizado: Producto){
        return this.http.put(this.url+'/producto/'+id, productoActualizado)
    }
}