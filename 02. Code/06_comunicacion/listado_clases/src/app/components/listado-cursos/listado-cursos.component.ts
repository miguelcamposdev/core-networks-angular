import { Component, OnInit } from '@angular/core';
import { CursoEmitter } from 'src/app/models/curso-emitter.interface';
import { Curso } from 'src/app/models/curso.interface';

const CURSOS: Curso[] = [
  { nombre: 'Angular', numeroAlumnos: 15 },
  { nombre: 'Java', numeroAlumnos: 20 },
  { nombre: 'Typescript', numeroAlumnos: 10 },
];

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css'],
})
export class ListadoCursosComponent implements OnInit {
  listadoCursos = CURSOS;
  totalAlumnosMatriculados = 0;

  ngOnInit(): void {}

  calcularTotalMatriculados() {
    this.totalAlumnosMatriculados = 0;
    this.listadoCursos.forEach((curso) => {
      this.totalAlumnosMatriculados += curso.numeroAlumnos;
    });
    return this.totalAlumnosMatriculados;
  }
}
