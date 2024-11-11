export class Vehiculo {
    id: number;
    placa: string;
    marca: string;
    modelo: number;
    cap_peso: number;
  
    constructor(
      id: number,
      placa: string,
      marca: string,
      modelo: number,
      cap_peso: number
    ) {
      this.id = id;
      this.placa = placa;
      this.marca = marca;
      this.modelo = modelo;
      this.cap_peso = cap_peso;
    }
  }
  