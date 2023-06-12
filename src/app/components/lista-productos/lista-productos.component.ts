import { Component, OnInit } from '@angular/core';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { ProductoService } from '../../services/producto.service';
import { Subcategoria } from '../../models/subcategoria.model';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  subcategorias: Subcategoria[] = [];
  productos: Producto[] = [];

  constructor(
    private subcategoriaService: SubcategoriaService,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.obtenerSubcategorias();
    this.obtenerProductos();
  }

  obtenerSubcategorias() {
    this.subcategoriaService.getSubcategorias().subscribe(
      (response: Subcategoria[]) => {
        this.subcategorias = response;
      },
      (error) => {
        console.error('Error al obtener las subcategorías:', error);
      }
    );
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(
      (response: Producto[]) => {
        this.productos = response;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  filtrarProductosPorSubcategoria(subcategoriaId: number) {
    // Implementa la lógica para filtrar los productos por la subcategoría seleccionada
  }

  agregarAlCarrito(producto: Producto) {
    // Implementa la lógica para agregar el producto al carrito
  }
}
