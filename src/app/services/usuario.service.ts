import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuarioService {
  // Implementa los métodos y la lógica del servicio aquí

  registrarUsuario(nombre: string, apellido: string, dni: string, mail: string, telefono: string) {
    // Implementa la lógica para almacenar los datos del usuario en el almacenamiento local
  }
  
}
