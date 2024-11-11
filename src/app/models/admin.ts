export class Admin {
  cedula: number;
  bodega: string;
  nombre: string;
  correo: string;
  contraseña: string;

  constructor(
    cedula: number,
    nombre: string,
    bodega: string,
    correo: string,
    contraseña: string
  ) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.bodega = bodega;
    this.correo = correo;
    this.contraseña = contraseña;
  }
}