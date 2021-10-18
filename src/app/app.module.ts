import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroProductoComponent } from './components/producto/registro-producto/registro-producto.component';
import { ListarProductosComponent } from './components/producto/listar-productos/listar-productos.component';
import { LoginComponent } from './components/login/login.component';

import { ProductoService } from './services/producto.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroProductoComponent,
    ListarProductosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    // AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
