import { HttpClient } from '@angular/common/http';

export abstract class CrudService<T> {

  constructor(protected http: HttpClient) {}

  create(entity: T) {
      return this.http.post<T>(`${this.getAdressAPI()}`, entity);
  }

  update(entity: T) {
    return this.http.put<T>(`${this.getAdressAPI()}`, entity);
  }

  findAllPaged(page: number, count: number) {
    return this.http.get<any>(`${this.getAdressAPI()}?page=${page}&size=${count}`);
  }

  findAll() {
    return this.http.get<any>(`${this.getAdressAPI()}`);
  }

  findById(id?: number){
    return this.http.get<T>(`${this.getAdressAPI()}/${id}`);
  }

  findByListId(ids: number[]){
    return this.http.post<T[]>(`${this.getAdressAPI()}/find-list-id`, ids);
  }

  delete(id?: number) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${id}`);
  }

  patch(id?: number, entity?: any) {
    return this.http.patch<any>(`${this.getAdressAPI()}/${id}`, entity);
  }

  abstract getAdressAPI(): string ;

  abstract getNewClass(): T;
}
