import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyChangePipe } from './core/pipes/currency-change-pipe/currency-change.pipe';
import { OrderByPipe } from './core/pipes/order-by-pipe/order-by.pipe';
import { SortPricePipe } from './core/pipes/sort-price-pipe/sort-price.pipe';

@NgModule({
  declarations: [CurrencyChangePipe, OrderByPipe, SortPricePipe],
  imports: [CommonModule],
  exports: [CurrencyChangePipe, OrderByPipe, SortPricePipe],
})
export class PipesModule {}
