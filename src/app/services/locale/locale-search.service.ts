import { Injectable } from '@angular/core';
import { Locale } from '../../models/locale.model';
import { SearchService } from '../pattern/search.service';
import { HttpParams } from '@angular/common/http';
import { ResponsePaged } from '../../models/response-api-paged.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocaleSearchService extends SearchService<Locale> {

  override searchByFilter(filter: any, page: number, count: number): Observable<ResponsePaged> {

    let params = new HttpParams();

    if (filter?.hasOwnProperty('name')) {
      params = params.append('name', filter.name);
    }

    if (filter?.hasOwnProperty('comments')) {
      params = params.append('comments', filter.comments);
    }

    if (filter?.hasOwnProperty('tag')) {
      params = params.append('tag', filter.tag);
    }

    return this.http.get<ResponsePaged>(`${this.getAdressAPI()}?page=${page}&size=${count}`, {params});
  }

  override search(filter: string, page: number, count: number) {
    let params = new HttpParams().set('name', filter);
    return this.http.get<ResponsePaged>(`${this.getAdressAPI()}?page=${page}&size=${count}`, {params});
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/locale/locale/search';
    return "http://192.168.1.13:9400/locale/search";
  }
}
