// src/app/conductor/conductor.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../models/pedido';
import { CONDUCTORES, PEDIDOS } from '../data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
  pedidos: Pedido[] = [];
  conductorName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const conductorId = parseInt(this.route.snapshot.paramMap.get('conductorId')!, 10);
    console.log('Conductor ID:', conductorId); 
    const conductor = CONDUCTORES.find(c => c.cedula === conductorId);
  
    if (conductor) {
      this.conductorName = conductor.nombre;
      this.pedidos = PEDIDOS.filter(p => p.conductor.cedula === conductorId);
      console.log('Conductor encontrado:', conductor); 
      console.log('Pedidos del conductor:', this.pedidos); 
    } else {
      console.warn('Conductor no encontrado');
    }
  }
  

  finalizarEntrega(pedido: Pedido): void {
    console.log(`Entrega finalizada para el pedido #${pedido.id}`);
  }

  reportarNovedad(pedido: Pedido): void {
    console.log(`Novedad reportada para el pedido #${pedido.id}`);
  }

  abrirGoogleMaps(direccion: string): void {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccion)}`;
  window.open(url, '_blank');
}

}
