import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegistroProductoComponent } from './components/producto/registro-producto/registro-producto.component';
import { ListarProductosComponent } from './components/producto/listar-productos/listar-productos.component';

const appRoutes: Routes=[
    {path:'', component:LoginComponent},
    {path:'producto', component: RegistroProductoComponent},
    {path:'producto/edit/:id', component: RegistroProductoComponent},
    {path:'productos',component: ListarProductosComponent}
];


//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);