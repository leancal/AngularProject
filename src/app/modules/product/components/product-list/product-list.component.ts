import { Component } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  public productList: Product[] = [];
  public subCategoryList: SubCategory[] = [];
  public productFiltered: Product[] = [];
  public marked: string[] = [];
  public page!: number;
  public parameter1 = 'default';
  public parameter2 = 'default';

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  public reset() {
    window.scroll({ top: 65, behavior: 'smooth' });
  }

  getProducts() {
    this.product.getProducts().subscribe((products) => {
      if (products) {
        this.productList = products;
      }
      this.product.getCategories().subscribe((categories) => {
        if (categories) {
          this.subCategoryList = categories;
        }
        if (this.productList && this.subCategoryList) {
          this.productList = this.product.getProductsWithCategory(
            this.productList,
            this.subCategoryList
          );
        }
        if (this.productList && localStorage.getItem('localCart')) {
          let cartStore = localStorage.getItem('localCart');
          let cartData = cartStore && JSON.parse(cartStore);
          this.productList = this.product.getLocalCartData(
            this.productList,
            cartData
          );
          this.productFiltered = this.productList;
        }
      });
    });
  }
  setProducts() {
    this.getProducts();
  }

  filterByCategories(checkbox: any) {
    let category = checkbox.value;
    let state = checkbox._checked;
    let newProducts = [];
    if (this.marked.length < 1) {
      this.productFiltered = this.productList;
    }
    if (state) {
      this.marked.push(category);
      this.productFiltered = this.productList;
      for (let i = 0; i < this.productFiltered.length; i++) {
        for (let j = 0; j < this.marked.length; j++) {
          if (this.productFiltered[i].subCategoria === this.marked[j]) {
            newProducts.push(this.productFiltered[i]);
          }
        }
      }
      this.productFiltered = newProducts;
    }
    if (!state) {
      this.marked = this.marked.filter((c) => c !== category);
      this.productFiltered = this.productList;
      for (let i = 0; i < this.productFiltered.length; i++) {
        for (let j = 0; j < this.marked.length; j++) {
          if (this.productFiltered[i].subCategoria === this.marked[j]) {
            newProducts.push(this.productFiltered[i]);
          }
        }
      }
      this.productFiltered = newProducts;
    }
    if (!state && this.marked.length < 1) {
      this.marked = this.marked.filter((c) => c !== category);
      this.productFiltered = this.productList;
    }
  }
}
