import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleDetailResponse } from '../models/people/people-detail.interface';
import { PeopleListResponse } from '../models/people/people-response.interface';

const PEOPLE_BASE_URL = 'https://swapi.dev/api/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeopleList(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(`${PEOPLE_BASE_URL}`);
  }

  getOnePeople(id: string): Observable<PeopleDetailResponse> {
    return this.http.get<PeopleDetailResponse>(`${PEOPLE_BASE_URL}/${id}`);
  }
}
