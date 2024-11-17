import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nuevo-admin-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevo-admin-component.component.html',
  styleUrl: './nuevo-admin-component.component.css'
})
export class NuevoAdminComponentComponent {
    admin = {
    cedula: 0,
    bodega: '',
    nombre: '',
    correo: '',
    contrasena: ''
  }
constructor(public dialogRef: MatDialogRef<NuevoAdminComponentComponent>) {}


  guardarAdmin() {
    this.dialogRef.close(this.admin);
  }
  }