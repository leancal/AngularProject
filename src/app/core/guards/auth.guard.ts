import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthGuard {
  constructor(private useRoute: Router, private user: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    if (userData.admin) {
      return true;
    }

    this.user.isAdminLogged;
    return this.useRoute.navigate(['/home']);
  }
}
