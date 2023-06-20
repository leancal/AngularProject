import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgOptimizedImage } from '@angular/common';
import { OrderByPipe } from 'src/app/core/pipes/order-by-pipe/order-by.pipe';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { CurrencyChangePipe } from 'src/app/core/pipes/currency-change-pipe/currency-change.pipe';
import { PipesModule } from 'src/app/pipes.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProductListAdminComponent } from './components/product-list-admin/product-list-admin.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductHeaderComponent,
    ProductListAdminComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    NgOptimizedImage,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  providers: [AuthGuard],
})
export class ProductModule {}
