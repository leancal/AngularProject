import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cantidadProductos: number = 0;

  constructor() {}

  obtenerCantidadProductos(): number {
    return this.cantidadProductos;
  }

  agregarProductoAlCarrito(): void {
    this.cantidadProductos++;
  }

  // Agrega otros métodos relacionados con el carrito según tus necesidades
}
