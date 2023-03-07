import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css'],
})
export class ListadoAlumnosComponent {
  isRed = true;
  isBold = true;

  changeColor() {
    this.isRed = !this.isRed;
  }

  changeBold() {
    this.isBold = !this.isBold;
  }
}
