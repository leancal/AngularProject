import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PipesModule } from 'src/app/pipes.module';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    UserComponent,
    UserAuthComponent,
    CartPageComponent,
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgOptimizedImage,
    MaterialModule,
    PipesModule,
  ],
})
export class UserModule {}
