import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { NumeroAlumnosComponent } from './components/numero-alumnos/numero-alumnos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListadoCursosComponent, NumeroAlumnosComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
