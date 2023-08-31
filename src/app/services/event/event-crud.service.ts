import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Character } from '../../models/character.model';
import { Event } from '../../models/event.model';
import { Injectable } from '@angular/core';
import { CrudService } from '../pattern/crud-service.service';
import { HistoricalDate } from '../../models/historical-date.model';
import { Locale } from '../../models/locale.model';

@Injectable({
  providedIn: 'root'
})
export class EventCrudService extends CrudService<Event> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/event/event';
    return "http://192.168.1.13:9300/event";
  }
  getNewClass(): Event {
    let entity = new Event();
    entity.characters = new Array<Character>();
    entity.locales = new Array<Locale>();
    return entity;
  }

  setStartOfPeriod(event?: Event, date?: HistoricalDate) {
    return this.http.put<any>(`${this.getAdressAPI()}/${event?.id}/start-of-period`, date);
  }

  deleteStartOfPeriod(event?: Event) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${event?.id}/start-of-period`);
  }

  setEndOfPeriod(event?: Event, date?: HistoricalDate) {
    return this.http.put<any>(`${this.getAdressAPI()}/${event?.id}/end-of-period`, date);
  }

  deleteEndOfPeriod(event?: Event) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${event?.id}/end-of-period`);
  }

  addCharacter(event?: Event, idCharacter?: number) {
    return this.http.post<any>(`${this.getAdressAPI()}/${event?.id}/characters/${idCharacter}`, {});
  }

  removeCharacter(event?: Event, idCharacter?: number) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${event?.id}/characters/${idCharacter}`);
  }

  addLocale(event?: Event, idLocale?: number) {
    return this.http.post<any>(`${this.getAdressAPI()}/${event?.id}/locales/${idLocale}`, {});
  }

  removeLocale(event?: Event, idLocale?: number) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${event?.id}/locales/${idLocale}`);
  }
}
