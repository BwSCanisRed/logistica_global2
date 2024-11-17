import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-conductor-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevo-conductor-component.component.html',
  styleUrl: './nuevo-conductor-component.component.css'
})
export class NuevoConductorComponentComponent {
    conductor = {
    cedula: 0,
    nombre: '',
    licencia: 0,
    zona: '',
    correo: '',
    contrasena: ''
  }
  constructor(public dialogRef: MatDialogRef<NuevoConductorComponentComponent>) { }
  
  guardarConductor() {
    this.dialogRef.close(this.conductor);
    
  }

 }

