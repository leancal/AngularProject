import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProductListAdminComponent } from './components/product-list-admin/product-list-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: 'list/admin',
    component: ProductListAdminComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
