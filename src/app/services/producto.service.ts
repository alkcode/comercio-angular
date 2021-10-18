import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Global } from './global';

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
}