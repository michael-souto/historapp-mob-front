import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePaged } from '../../models/response-api-paged.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class SearchService <T> {

  constructor(protected http: HttpClient) {}

  abstract search(filter: string, page: number, count: number): Observable<ResponsePaged>;

  abstract searchByFilter(filter: any, page: number, count: number): Observable<ResponsePaged>;

  abstract getAdressAPI(): string ;
}
