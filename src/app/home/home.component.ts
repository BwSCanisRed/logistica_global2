import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ADMIN,CLIENTES, CONDUCTORES } from '../data/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string = '';
  password: string = '';
  trackingNumber: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Función para autenticarse y redirigir según el rol
  login(): void {
    const conductor = CONDUCTORES.find(c => c.correo === this.email && c.contraseña === this.password);
    const admin = ADMIN.find(a => a.correo === this.email && a.contraseña === this.password);
  
    if (conductor) {
      // Redirigir a la página del conductor con su ID
      this.router.navigate(['/conductor', conductor.cedula]);
    } else if (admin) {
      // Redirigir a la página del administrador con su ID
      this.router.navigate(['/admin', admin.cedula]);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
  

  goToTracking(): void {
    const pedido = CLIENTES.flatMap(cliente => cliente.pedidos).find(p => p.id === parseInt(this.trackingNumber, 10));

    if (pedido) {
      this.router.navigate(['/tracking', pedido.id]);
    } else {
      alert('Pedido no encontrado');
    }
  }
}
