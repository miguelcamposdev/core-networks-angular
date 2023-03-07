import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {}
  ngOnInit(): void {
    console.log('Cuando el componente es iniciado');
  }
}
