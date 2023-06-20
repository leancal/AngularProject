export interface Product {
  id_producto: number;
  nombre: string;
  precio: number;
  iva: number;
  id_subcategoria: number | string;
  subCategoria: string | undefined;
  imagenes: [
    {
      nombre: string;
    }
  ];
  inCart: boolean;
  garantia: number;
  stock: number;
  vendible: number;
}

export interface SubCategory {
  id: number;
  nombre: string;
  imagen: string;
}
