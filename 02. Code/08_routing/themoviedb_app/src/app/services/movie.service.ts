import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePopularResponse } from '../models/movie-popular.interface';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '065ebde131b83e963a2deb327ebb45ab';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopular(): Observable<MoviePopularResponse> {
    return this.http.get<MoviePopularResponse>(
      `${BASE_URL}/popular?api_key=${API_KEY}`
    );
  }

  /*
  getLatest(): Observable<MoviePopularResponse> {
    return this.http.get<MoviePopularResponse>(`${BASE_URL}/latest`);
  }
  */
}
