import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CursoEmitter } from 'src/app/models/curso-emitter.interface';
import { Curso } from 'src/app/models/curso.interface';

@Component({
  selector: 'app-numero-alumnos',
  templateUrl: './numero-alumnos.component.html',
  styleUrls: ['./numero-alumnos.component.css'],
})
export class NumeroAlumnosComponent {
  @Input() cursoInput: Curso = { nombre: '', numeroAlumnos: 0 };
}
