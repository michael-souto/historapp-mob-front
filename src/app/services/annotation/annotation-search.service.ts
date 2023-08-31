import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annotation } from 'src/app/models/annotation.model';
import { ResponsePaged } from 'src/app/models/response-api-paged.model';
import { SearchService } from '../pattern/search.service';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnotationSearchService extends SearchService<Annotation> {

  override searchByFilter(filter: any, page: number, count: number): Observable<ResponsePaged> {

    let params = new HttpParams();

    if (filter?.hasOwnProperty('title')) {
      params = params.append('title', filter.title);
    }

    if (filter?.hasOwnProperty('description')) {
      params = params.append('description', filter.description);
    }

    if (filter?.hasOwnProperty('tag')) {
      params = params.append('tag', filter.tag);
    }

    if (filter?.hasOwnProperty('eventsIds')) {
      params = params.append('events-ids', filter.eventsIds);
    }

    return this.http.get<ResponsePaged>(`${this.getAdressAPI()}?page=${page}&size=${count}&sort=title,id`, {params});
  }

  override search(filter: any, page: number, count: number) {
    let params = new HttpParams().set('all', filter);
    return this.http.get<ResponsePaged>(`${this.getAdressAPI()}?page=${page}&size=${count}`, {params});
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/annotation/annotation/search';
    return "http://192.168.1.13:9200/annotation/search";
  }
}
