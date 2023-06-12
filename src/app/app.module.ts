import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    RegistroUsuarioComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
