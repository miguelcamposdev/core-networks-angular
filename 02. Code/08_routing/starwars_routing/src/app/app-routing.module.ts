import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'planets', component: PlanetListComponent },
  { path: 'people/detail/:id', component: PeopleDetailComponent },
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
