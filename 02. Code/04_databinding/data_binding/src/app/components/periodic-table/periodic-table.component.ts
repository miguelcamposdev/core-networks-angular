import { Component } from '@angular/core';
import { PeriodicElement } from 'src/app/models/periodic-element.interface';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css'],
})
export class PeriodicTableComponent {
  listadoElementos = ELEMENT_DATA;
  nombre = 'Angular';
  i = 0;
  anchura = 200;
  imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  openDialog() {
    alert('Has hecho click en el botón. Enhorabuena!');
  }

  getElement(position: number) {
    return this.listadoElementos[position].name;
  }

  siguienteElemento() {
    this.i++;
  }

  anteriorElemento() {
    this.i--;
  }

  cambiarImagen() {
    if (
      this.imageUrl ==
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7-VtZdhaA5nfe0WLR0ASbhe3s_u97wLh0g&usqp=CAU'
    ) {
      this.imageUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
    } else {
      this.imageUrl =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7-VtZdhaA5nfe0WLR0ASbhe3s_u97wLh0g&usqp=CAU';
    }
  }
}
