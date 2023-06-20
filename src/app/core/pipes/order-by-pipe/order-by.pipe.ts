import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): Product[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const [order = args[0]]: string[] = args;
    return value.sort((a, b) => {
      const compare = a.nombre.localeCompare(b.nombre);
      if (order === 'asc') {
        return compare;
      }
      if (order === 'desc') {
        return -compare;
      }
    });
  }
}
