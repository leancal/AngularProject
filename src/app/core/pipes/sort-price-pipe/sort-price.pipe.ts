import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product.model';

@Pipe({
  name: 'sortPrice',
})
export class SortPricePipe implements PipeTransform {
  transform(value: Product[], order: any): Product[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return a.precio - b.precio;
      } else if (order === 'desc') {
        return b.precio - a.precio;
      }
      return 0;
    });
  }
}
