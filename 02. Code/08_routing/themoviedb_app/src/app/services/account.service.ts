import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AccountDetailsResponse } from '../models/interface/account-details.interface';
import { Constants } from '../utils/constants';

const ACCOUNT_URL = `${environment.API_BASE_URL}/account`;

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem(Constants.LOCAL_SESSION_ID);
    return this.http.get<AccountDetailsResponse>(
      `${ACCOUNT_URL}?session_id=${sessionId}`
    );
  }
}
