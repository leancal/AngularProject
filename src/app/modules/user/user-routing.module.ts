import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {
    path: 'auth',
    component: UserAuthComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
