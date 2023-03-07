import { Component, OnInit } from '@angular/core';
import { ParidadPipe } from 'src/app/pipes/paridad.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private paridadPipe: ParidadPipe) {}
  ngOnInit(): void {
    console.log('Paridad del 6: ' + this.mostrarParidad(6));
    console.log('Paridad del 3: ' + this.mostrarParidad(3));
  }

  mostrarParidad(numero: number) {
    return this.paridadPipe.transform(numero);
  }
}
