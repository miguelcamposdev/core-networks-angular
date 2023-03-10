import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CreateListDto } from '../models/dto/create-list.dto';
import { CreateListResponse } from '../models/interface/create-list.interface';
import { Constants } from '../utils/constants';

const LIST_URL = `${environment.API_BASE_URL_V4}/list`;

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  constructor(private http: HttpClient) {}

  createList(body: CreateListDto): Observable<CreateListResponse> {
    let sessionId = localStorage.getItem(Constants.LOCAL_SESSION_ID);
    return this.http.post<CreateListResponse>(
      `${LIST_URL}?session_id=${sessionId}`,
      body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
