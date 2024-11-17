import { Vehiculo } from './vehiculo'; 
import { Pedido } from './pedido'; 

export class Conductor {
  cedula: number;
  nombre: string;
  licencia: number;
  zona: string;
  correo: string;
  contrasena: string;
  vehiculo: Vehiculo;
  pedidos: Pedido[];

  constructor(
    cedula: number,
    nombre: string,
    licencia: number,
    zona: string,
    correo: string,
    contrasena: string,
    vehiculo: Vehiculo,
    pedidos: Pedido[] = []
  ) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.licencia = licencia;
    this.zona = zona;
    this.correo = correo;
    this.contrasena = contrasena;
    this.vehiculo = vehiculo;
    this.pedidos = pedidos;
  }
}
