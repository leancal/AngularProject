import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  
  constructor(private http: HttpClient, private route: Router) {}

  isAdminLogged = new BehaviorSubject<boolean>(false);

  refresh: EventEmitter<number> = new EventEmitter<number>();



  ngOnInit() {}

  userLogout() {
    let userStorage = localStorage.getItem('user');
    let userData = userStorage && JSON.parse(userStorage);
    userData.state = 'disconnected';
    localStorage.setItem('user', JSON.stringify(userData));
  }

  authRefresh() {
    this.refresh.emit(1);
  }
}
