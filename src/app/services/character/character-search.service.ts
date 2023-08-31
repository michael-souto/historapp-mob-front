import { SearchService } from 'src/app/services/pattern/search.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { ResponsePaged } from 'src/app/models/response-api-paged.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterSearchService extends SearchService<Character> {

  override searchByFilter(filter: any, page: number, count: number): Observable<ResponsePaged> {

    let params = new HttpParams();

    if (filter?.hasOwnProperty('name')) {
      params = params.append('name', filter.name);
    }

    if (filter?.hasOwnProperty('idMother')) {
      params = params.append('id-mother', filter.idMother);
    }

    return this.http.get<ResponsePaged>(`${this.getAdressAPI()}?page=${page}&size=${count}`, {params});
  }

  override search(filter: any, page: number, count: number) {
    let params = new HttpParams().set('name', filter);
    return this.http.get<ResponsePaged>(`${this.getAdressAPI()}?page=${page}&size=${count}`, {params});
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/character/character/search';
    return "http://192.168.1.13:9200/character/search";
  }
}
