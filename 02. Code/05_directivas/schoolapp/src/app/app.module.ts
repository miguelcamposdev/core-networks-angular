import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
