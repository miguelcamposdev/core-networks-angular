import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CreateSessionDto } from '../models/dto/create-session.dto';
import { CreateSessionResponse } from '../models/interface/create-session.interface';
import { RequestTokenResponse } from '../models/interface/request-token.interface';
import { Constants } from '../utils/constants';

const AUTH_URL = `${environment.API_BASE_URL}/authentication`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  requestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(`${AUTH_URL}/token/new`);
  }

  createSession(): Observable<CreateSessionResponse> {
    let token = localStorage.getItem(Constants.LOCAL_REQUEST_TOKEN) ?? '';
    let body = new CreateSessionDto(token);
    return this.http.post<CreateSessionResponse>(
      `${AUTH_URL}/session/new`,
      body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
