import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MoviePopularResponse } from '../models/interface/movie-popular.interface';

const MOVIE_URL = `${environment.API_BASE_URL}/movie`;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopular(): Observable<MoviePopularResponse> {
    return this.http.get<MoviePopularResponse>(`${MOVIE_URL}/popular`);
  }

  /*
  getLatest(): Observable<MoviePopularResponse> {
    return this.http.get<MoviePopularResponse>(`${BASE_URL}/latest`);
  }
  */
}
