import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../models/pedido';
import { Conductor } from '../models/conductor';
import { ADMIN, PEDIDOS, CONDUCTORES } from '../data/data';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NuevoAdminComponentComponent } from '../nuevo-admin-component/nuevo-admin-component.component';
import { NuevoVehiculoComponentComponent } from '../nuevo-vehiculo-component/nuevo-vehiculo-component.component';
import { NuevoConductorComponentComponent } from '../nuevo-conductor-component/nuevo-conductor-component.component';
import { NuevoPedidoComponentComponent } from '../nuevo-pedido-component/nuevo-pedido-component.component'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule] // Agregar MatDialogModule
})
export class AdminComponent implements OnInit {
  pedidos: Pedido[] = []; // Declaración de los pedidos
  conductores: Conductor[] = []; // Declaración de los conductores
  adminName: string = ''; // Declaración del nombre del administrador
  selectedDriver: Conductor | null = null; 

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    const adminId = parseInt(this.route.snapshot.paramMap.get('adminId')!, 10);
    const admin = ADMIN.find(a => a.cedula === adminId);

    if (admin) {
      this.adminName = admin.nombre;
      this.pedidos = PEDIDOS.filter(p => p.estado === 'En bodega');
      this.conductores = CONDUCTORES;
    } else {
      console.error('Administrador no encontrado');
    }
  }

  

  abrirModalAdmin() {
    const dialogRef = this.dialog.open(NuevoAdminComponentComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nuevo Administrador:', result);
      }
    });
  }

  abrirModalVehiculo() {
    const dialogRef = this.dialog.open(NuevoVehiculoComponentComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nuevo Vehículo:', result);
      }
    });
  }

  abrirModalConductor() {
    const dialogRef = this.dialog.open(NuevoConductorComponentComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.vehiculo = 0;
        result.pedidos = [];
        console.log('Nuevo Conductor:', result);
      }
    });
  }

  abrirModalPedido() {
    const dialogRef = this.dialog.open(NuevoPedidoComponentComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nuevo Pedido:', result);
      }
    });
  }

    asignarPedido(): void {
    if (this.selectedDriver) {
      console.log(`Asignando pedido al conductor: ${this.selectedDriver.nombre}`);
      // Lógica para asignar el pedido al conductor seleccionado
    } else {
      console.error('No se ha seleccionado ningún conductor');
    }
  }
}
