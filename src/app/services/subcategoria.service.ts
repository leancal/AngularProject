import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class SubcategoriaService {
    constructor(private http: HttpClient) {}
  
    // Métodos para obtener las subcategorías
    getSubcategorias(): Observable<any> {
        const url = 'https://static.compragamer.com/test/subcategorias.json';
        return this.http.get(url);
      }
      
  }
  