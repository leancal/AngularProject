import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  // Métodos para obtener los productos
  getProductos(): Observable<any> {
    const url = 'https://static.compragamer.com/test/productos.json';
    return this.http.get(url);
  }
  
}
