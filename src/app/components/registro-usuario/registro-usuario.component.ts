import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      mail: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  registrarUsuario() {
    if (this.registroForm.valid) {
      // Obtener los datos del formulario
      const nombre = this.registroForm.value.nombre;
      const apellido = this.registroForm.value.apellido;
      const dni = this.registroForm.value.dni;
      const mail = this.registroForm.value.mail;
      const telefono = this.registroForm.value.telefono;

      // Guardar los datos del nuevo usuario utilizando el servicio correspondiente
      this.usuarioService.registrarUsuario(nombre, apellido, dni, mail, telefono);

      // Restablecer el formulario
      this.registroForm.reset();
    } else {
      // Mostrar mensajes de validación o errores
    }
  }
}
