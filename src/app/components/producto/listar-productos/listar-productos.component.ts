import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
// import { Producto } from '../../../models/Producto';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  public productos: any=[];

  constructor( private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      response=>{
         console.log(response);
         this.productos= response;
         console.log(this.productos);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
