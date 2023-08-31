import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Locale } from 'src/app/models/locale.model';
import { CrudService } from '../pattern/crud-service.service';

@Injectable({
  providedIn: 'root'
})
export class LocaleCrudService extends CrudService<Locale> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/locale/locale';
    return "http://192.168.1.13:9400/locale";
  }
  getNewClass(): Locale {
    let entity = new Locale();
    return entity;
  }
}
