import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    PlanetListComponent,
    PlanetDetailComponent,
    NotFoundComponent,
    HomePageComponent,
    NavMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
