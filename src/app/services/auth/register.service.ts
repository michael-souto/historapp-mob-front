import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(protected http: HttpClient) { }

  getAdressAPI(): string {
    return environment.apiUrlAdm;
    return "http://192.168.1.13:9100/calendar";
  }

  register(user: User) {
    return this.http.post<any>(`${this.getAdressAPI()}/public/users`, user);
  }
}
