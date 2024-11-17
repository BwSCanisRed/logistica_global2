import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nuevo-vehiculo-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevo-vehiculo-component.component.html',
  styleUrl: './nuevo-vehiculo-component.component.css'
})
export class NuevoVehiculoComponentComponent {
  vehiculo = {
    placa: '',
    marca: '',
    modelo: '',
    color: '',
    capacidad: 0,
    tipo: ''
  }

  constructor(public dialogRef: MatDialogRef<NuevoVehiculoComponentComponent>) { }

  guardarVehiculo() {
    this.dialogRef.close(this.vehiculo);
  }

}
