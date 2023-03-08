export enum Sexo {
  Hombre,
  Mujer,
}

export interface Alumno {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;
}
