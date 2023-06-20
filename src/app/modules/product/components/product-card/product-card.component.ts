import { Component, Input } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  constructor(private productService: ProductService) {}

  ngOnIni() {}
  
  @Input() product: Product = {
    id_producto: 0,
    nombre: '',
    precio: 0,
    iva: 0,
    id_subcategoria: 0,
    subCategoria: '',
    imagenes: [
      {
        nombre: '',
      },
    ],
    inCart: false,
    garantia: 0,
    stock: 0,
    vendible: 0,
  };


  addToCart() {
    if (this.product) {
      this.productService.localAddToCart(this.product);
    }
  }

  removeFromCart(producto: Product) {
    if (producto) {
      this.productService.removeFromCart(this.product);
    }
  }
}
