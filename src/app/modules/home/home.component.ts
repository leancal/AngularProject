import { Component } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  
  public productList: Product[] = [];
  public subCategoryList: SubCategory[] = [];
  public popularProducts: Product[] = [];
  public images: string[] = [
    'https://www.teahub.io/photos/full/102-1029001_hd-game-wallpapers-archives-de-portada-para-youtube.jpg',
  ];



  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      if (products) {
        this.productList = products;
      }
      this.productService.getCategories().subscribe((categories) => {
        if (categories) {
          this.subCategoryList = categories;
        }
        if (this.productList && this.subCategoryList) {
          this.productList = this.productService.getProductsWithCategory(
            this.productList,
            this.subCategoryList
          );
          for (let i = 0; this.popularProducts.length < 4; i++) {
            let random = Math.floor(Math.random() * this.productList.length);
            if (!this.popularProducts.includes(this.productList[random])) {
              this.popularProducts.push(this.productList[random]);
            }
          }
        }
        if (this.productList && localStorage.getItem('localCart')) {
          let cartStore = localStorage.getItem('localCart');
          let cartData = cartStore && JSON.parse(cartStore);
          this.productList = this.productService.getLocalCartData(
            this.productList,
            cartData
          );
        }
        return 'Success';
      });
    });
  }

  addToCart(product: Product) {
    if (product) {
      this.productService.localAddToCart(product);
    }
  }
  removeFromCart(product: Product) {
    if (product) {
      this.productService.removeFromCart(product);
    }
  }
}
