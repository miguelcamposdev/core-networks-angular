import { Component, OnInit } from '@angular/core';
import { MoviePopular } from 'src/app/models/interface/movie-popular.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieList: MoviePopular[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopular().subscribe((resp) => {
      this.movieList = resp.results;
    });
  }
  getMoviePhoto(movie: MoviePopular) {
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }
}
