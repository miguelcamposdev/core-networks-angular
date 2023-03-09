import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    PeopleListComponent,
    HomePageComponent,
    NavMenuComponent,
    MovieDetailComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 0,
      outerStrokeColor: '#78C000',
      innerStrokeColor: 'transparent',
      animationDuration: 300,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
