import { Component } from '@angular/core';
import { LabelEmitter } from 'src/app/models/label-emitter.interface';
import { Task } from 'src/app/models/task.interface';

const TAREAS: Task[] = [
  { nombre: 'Update software', valorCompletado: 50 },
  { nombre: 'Clean software', valorCompletado: 30 },
  { nombre: 'Release software', valorCompletado: 100 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  listadoTareas = TAREAS;

  modificarValor(event: LabelEmitter) {
    this.listadoTareas[event.i].valorCompletado = event.valor;
  }
}
