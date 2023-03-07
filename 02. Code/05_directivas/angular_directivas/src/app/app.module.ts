import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParidadPipe } from './pipes/paridad.pipe';
import { HomeComponent } from './components/home/home.component';
import { ImgshowPipe } from './pipes/imgshow.pipe';
import { ListadoElementosComponent } from './components/listado-elementos/listado-elementos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParidadPipe,
    HomeComponent,
    ImgshowPipe,
    ListadoElementosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [ParidadPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
