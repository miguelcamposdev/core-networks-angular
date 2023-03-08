import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelEmitter } from 'src/app/models/label-emitter.interface';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
})
export class LabelComponent {
  @Input() valor: number = 0;
  @Input() count: number = 0;
  @Output() nuevoValor = new EventEmitter<LabelEmitter>();

  emitirNuevoValor() {
    this.nuevoValor.emit({ valor: this.valor, i: this.count });
  }
}
