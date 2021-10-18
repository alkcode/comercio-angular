import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ActivatedRoute, Router} from '@angular/router';
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
    precioVenta: 0,


  }

  constructor( 
    private productoService: ProductoService,
    private router: Router,
    private activedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    console.log(params);
    if(params.id){
      this.productoService.obtenerProducto(params.id).subscribe(
        response=>{
          console.log(response);
          //this.producto = response;
        },
        error=>{
          console.log(error);
        }
      )
    }
    this.titulo='Registrar producto'
  }

  guardarProducto(){
    delete this.producto.id;

    console.log(this.producto);
    this.productoService.guardarProductos(this.producto).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['/productos']);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
