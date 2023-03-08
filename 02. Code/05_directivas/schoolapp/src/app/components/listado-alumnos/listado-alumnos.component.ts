import { Component } from '@angular/core';
import { Alumno, Sexo } from 'src/app/models/alumno.interface';

const ALUMNNOS: Alumno[] = [
  {
    nombre: 'Miguel',
    apellidos: 'Campos',
    edad: 35,
    sexo: Sexo.Hombre,
  },
  {
    nombre: 'María',
    apellidos: 'García',
    edad: 17,
    sexo: Sexo.Mujer,
  },
];

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css'],
})
export class ListadoAlumnosComponent {
  isRed = true;
  isBold = true;
  listadoAlumnos = ALUMNNOS;

  changeColor() {
    this.isRed = !this.isRed;
  }

  isHombre(alumno: Alumno): boolean {
    return alumno.sexo == Sexo.Hombre;
  }

  changeBold() {
    this.isBold = !this.isBold;
  }
}
