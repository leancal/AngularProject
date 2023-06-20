import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { URLc, URLp } from '../../constans/constans';
import { Product, SubCategory } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}
  
  URLp = URLp;

  URLc = URLc;

  removeCart = false;

  cartData = new EventEmitter<Product[] | []>();


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URLp);
  }
  getCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.URLc);
  }

  getProductsWithCategory(p: Product[], c: SubCategory[]) {
    for (let i = 0; i < p.length; i++) {
      for (let j = 0; j < c.length; j++) {
        if (p[i].id_subcategoria === c[j].id) {
          p[i].subCategoria = c[j].nombre;
        }
      }
    }
    return p;
  }

  getLocalCartData(p: Product[], c: any) {
    for (let i = 0; i < p.length; i++) {
      for (let j = 0; j < c.length; j++) {
        if (p[i].id_producto === c[j].id_producto) {
          p[i].inCart = true;
        }
      }
    }
    return p;
  }

  localAddToCart(product: Product) {
    let cartData: any = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      product.inCart = true;
      localStorage.setItem('localCart', JSON.stringify([product]));
      cartData = [product];
    } else {
      cartData = JSON.parse(localCart);
      if (
        cartData.filter((p: Product) => p.id_producto === product.id_producto)
          .length > 0
      ) {
        return 'Ya fue agregado';
      }
      product.inCart = true;
      cartData.push(product);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
    return 'Agregado';
  }

  removeFromCart(product: Product) {
    let cartData: any = [];
    let localCart = localStorage.getItem('localCart');
    if (product) {
      product.inCart = false;
      cartData = localCart && JSON.parse(localCart);
      cartData = cartData.filter(
        (p: Product) => p.id_producto !== product.id_producto
      );
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
    return 'Removido';
  }
}
