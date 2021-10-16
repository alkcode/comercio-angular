import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarProductosComponent } from './components/producto/listar-productos/listar-productos.component';
import { RegistroProductoComponent } from './components/producto/registro-producto/registro-producto.component';

const routes: Routes = [
  {
    path:'',
    //redirectTo:'/login'
    //component: LoginComponent
  },
  {
    path:'/login',
    component: LoginComponent
  },
  {
    path:'/producto/registro',
    component: RegistroProductoComponent
  },
  {
    path:'/productos',
    component: ListarProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
