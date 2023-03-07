import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MiguelComponent } from './miguel/miguel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiguelComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LoginComponent],
})
export class AppModule {}
