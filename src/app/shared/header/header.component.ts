import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(
    private route: Router,
    private user: UserService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.user.refresh.subscribe((result) => {
      if (result) {
        this.authVerify();
        this.refresh = 0;
      }
    });
    this.authVerify();

    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }
    this.productService.cartData.subscribe((items) => {
      this.cartItems = items.length;
    });
  }
  
  menuType: number = 0;

  userName: string | undefined;

  refresh: number = 0;

  cartItems: number = 0;

  auth = undefined;


  authVerify() {
    if (localStorage.getItem('user')) {
      let userStorage = localStorage.getItem('user');
      let userData = userStorage && JSON.parse(userStorage);
      this.auth = userData.admin;
      if (userData.state === 'connected') {
        this.userName = userData.name;
        this.menuType = 1;
      } else {
        this.menuType = 0;
      }
    } else {
      this.menuType = 0;
    }
  }

  loginPage() {
    this.route.navigate(['/user/login']);
  }

  logout() {
    let userStorage = localStorage.getItem('user');
    let userData = userStorage && JSON.parse(userStorage);
    if (userData.admin !== 0) {
      userData.admin = false;
    }
    localStorage.setItem('user', JSON.stringify(userData));
    this.userName = undefined;
    this.user.userLogout();
    this.authVerify();
    this.route.navigate(['/home']);
  }
}
