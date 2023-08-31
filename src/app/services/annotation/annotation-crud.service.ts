import { Injectable } from '@angular/core';
import { Annotation } from 'src/app/models/annotation.model';
import { CrudService } from '../pattern/crud-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from 'src/app/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class AnnotationCrudService  extends CrudService<Annotation> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/annotation/annotation';
    return "http://localhost:9500/annotation";
  }
  getNewClass(): Annotation {
    let entity = new Annotation();
    entity.title = 'Nota sem título'
    entity.characters = [];
    entity.comments = [];
    entity.locales = [];
    entity.characters = []
    return entity;
  }

  insertComment(annotation: Annotation, comment: Comment) {
    return this.http.post<Comment>(`${this.getAdressAPI()}/${annotation.id}/comments`, comment);
  }

  updateComment(annotation: Annotation, comment: Comment) {
    return this.http.put<Comment>(`${this.getAdressAPI()}/${annotation.id}/comments/${comment.id}`, comment);
  }

  deleteComment(annotation: Annotation, comment: Comment) {
    return this.http.delete(`${this.getAdressAPI()}/${annotation.id}/comments/${comment.id}`);
  }

  findAllComments(idCalendar?: number){
    return this.http.get<any>(`${this.getAdressAPI()}/${idCalendar}/comments`);
  }

  addCharacter(annotation?: Annotation, characterId?: number) {
    return this.http.post<any>(`${this.getAdressAPI()}/${annotation?.id}/characters/${characterId}`, {});
  }

  removeCharacter(annotation?: Annotation, characterId?: number) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${annotation?.id}/characters/${characterId}`);
  }

  addLocale(annotation?: Annotation, localeId?: number) {
    return this.http.post<any>(`${this.getAdressAPI()}/${annotation?.id}/locales/${localeId}`, {});
  }

  removeLocale(annotation?: Annotation, localeId?: number) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${annotation?.id}/locales/${localeId}`);
  }

  addEvent(annotation?: Annotation, eventId?: number) {
    return this.http.post<any>(`${this.getAdressAPI()}/${annotation?.id}/events/${eventId}`, {});
  }

  removeEvent(annotation?: Annotation, eventId?: number) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${annotation?.id}/events/${eventId}`);
  }
}
