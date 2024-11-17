import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-pedido-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevo-pedido-component.component.html',
  styleUrl: './nuevo-pedido-component.component.css'
})
export class NuevoPedidoComponentComponent {
  pedido = {
    id: 0,
    origen: '',
    destino: '',
    fecha: '',
    hora: '',
    estado: 'Bodega'
  }

  constructor(public dialogRef: MatDialogRef<NuevoPedidoComponentComponent>) { }

  guardarPedido() {
    this.dialogRef.close(this.pedido);
  }
}
