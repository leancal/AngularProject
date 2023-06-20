import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/core/services/currency/currency.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css'],
})
export class ProductHeaderComponent {
  
  constructor(private currencyServices: CurrencyService) {}
  
  public currencies: Array<any> = [];
  
  ngOnInit(): void {}

  setCurrency(symbol: string, value: number): void {
    this.currencyServices.setCurrency(symbol, value);
  }
}
