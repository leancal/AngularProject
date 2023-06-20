import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  public currency = { symbol: 'ARS', value: 1 };

  currency$: BehaviorSubject<any> = new BehaviorSubject<any>(this.currency);

  constructor() {}

  setCurrency(symbol: string, value: number): void {
    const data = {
      symbol,
      value,
    };

    this.currency$.next(data);
  }
}
