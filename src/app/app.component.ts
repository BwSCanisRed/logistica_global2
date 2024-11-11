import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { Cliente } from './models/cliente';
import { Pedido } from './models/pedido';
import { Conductor } from './models/conductor';
import { Vehiculo } from './models/vehiculo';
import { Admin } from './models/admin';
import { CLIENTES, PEDIDOS, CONDUCTORES, VEHICULOS, ADMIN } from './data/data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, RouterOutlet, HomeComponent]
})
export class AppComponent implements OnInit {
  title = 'logistica_global2';

  // Declaración de variables para los datos
  clientes: Cliente[] = CLIENTES;
  pedidos: Pedido[] = PEDIDOS;
  conductores: Conductor[] = CONDUCTORES; 
  vehiculos: Vehiculo[] = VEHICULOS;
  Administradores: Admin[] = ADMIN;


  constructor() {}

  ngOnInit(): void {
    // Los datos ya están asignados al inicializar
  }
}

