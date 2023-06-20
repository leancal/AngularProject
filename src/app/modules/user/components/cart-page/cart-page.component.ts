import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { priceSummary } from 'src/app/core/models/summary.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {

  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit() {
    this.getCart();
  }

  cartProducts: Product[] = [];
  
  priceSummary: priceSummary = {
    price: 0,
    iva: 0,
    delivery: 0,
    total: 0,
  };


  getCart() {
    if (localStorage.getItem('localCart')) {
      let cartStore = localStorage.getItem('localCart');
      let cartData = cartStore && JSON.parse(cartStore);
      this.cartProducts = cartData;

      this.getSummary();
    } else {
      this.route.navigate(['/home']);
    }
  }
  getSummary() {
    let products = this.cartProducts;
    let price: number = 0;
    let iva: number = 0;

    products.forEach((e) => {
      price = price + e.precio;
      iva = +e.iva;
    });
    this.priceSummary.price = price;
    this.priceSummary.iva = (this.priceSummary.price * iva) / 100;
    this.priceSummary.delivery = 1500;
    this.priceSummary.total =
      this.priceSummary.price +
      this.priceSummary.iva +
      this.priceSummary.delivery;
  }

  removeFromCart(cart: Product) {
    this.productService.removeFromCart(cart);
    this.getCart();
  }
}
