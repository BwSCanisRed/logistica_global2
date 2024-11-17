import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { PEDIDOS } from '../data/data';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  pedido: Pedido | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    // Verifica si el ID es válido
    if (idParam) {
      const id = parseInt(idParam, 10);
      
      if (!isNaN(id)) {
        this.pedido = PEDIDOS.find(p => p.id === id);
      }
    }

    if (!this.pedido) {
      alert('Pedido no encontrado');
    }
  }

    get pedidoEnBodega(): boolean {
    return this.pedido?.estado === 'En bodega';
  }

  get pedidoCreado(): boolean {
    return !!this.pedido?.fechaBodega;
  }

  get pedidoEnTransito(): boolean {
    return !!this.pedido?.fechaTransito;
  }

  get pedidoEntregado(): boolean {
    return !!this.pedido?.fechaEntregado;
  }
}
