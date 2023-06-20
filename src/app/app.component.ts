// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'compra-gamer-challange';
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;

  constructor(private router: Router) {}

  isLandingPage(): boolean {
    return this.router.url === '/landing';
  }

  isNotLandingPage(): boolean {
    return !this.isLandingPage();
  }

  ngOnInit() {
    setTimeout(() => {
      this.showHeader = false;
      this.router.navigate(['/home']);
    }, 3000); // Redirige después de 5 segundos (5000 ms)
  }
}