import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';

import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  public titulo:string = '';

  public producto: Producto = {

    id: 0,
    codigo: '',
    descripcion: '',
    categoria:'',
    stock: 0,
    precioCompra: 0,
    precioVenta: 0

  }

  constructor( private ProductoService: ProductoService ) { }

  ngOnInit(): void {
    this.titulo='Registrar producto'
  }

  guardarProducto(){
    console.log(this.producto);
  }

}
