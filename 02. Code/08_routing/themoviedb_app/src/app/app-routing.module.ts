import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedComponent } from './components/approved/approved.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { NewListPageComponent } from './pages/new-list-page/new-list-page.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/detail/:id', component: MovieDetailComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'approved', component: ApprovedComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'nueva-lista', component: NewListPageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
