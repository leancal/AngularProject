import { Subcategoria } from './subcategoria.model';

export class Producto {
    id: number;
    nombre: string;
    imagen: string;
    precio: number;
    subcategoria: Subcategoria;
  }
  