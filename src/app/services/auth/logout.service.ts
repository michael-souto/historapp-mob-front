

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.tokensRenokeUrl = `${environment.apiUrlAdm}/tokens/revoke`;
  }

  logout() {
    this.auth.limparAccessToken();
    this.auth.redirectLogin();
  }
}
