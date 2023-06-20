import { Component } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.css'],
})
export class ProductListAdminComponent {
  
  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.getProducts();
  }

  productList: undefined | Product[];
  subCategoryList: undefined | SubCategory[];
  
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
        }
      });
    });
  }
}
