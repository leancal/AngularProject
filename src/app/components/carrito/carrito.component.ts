import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.cantidadProductos = this.carritoService.obtenerCantidadProductos();
  }
}
