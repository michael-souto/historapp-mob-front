import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoricalCalendar } from '../../models/historical-calendar.model';
import { HistoricalMonth } from '../../models/historical-month.model';
import { CrudService } from '../pattern/crud-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarCrudService extends CrudService<HistoricalCalendar> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/calendar/calendar';
    return "http://192.168.1.13:9100/calendar";
  }
  getNewClass(): HistoricalCalendar {
    let entity = new HistoricalCalendar();
    return entity;
  }

  insertMonth(calendar: HistoricalCalendar, month: HistoricalMonth) {
    return this.http.post<HistoricalMonth>(`${this.getAdressAPI()}/${calendar.id}/month`, month);
  }

  updateMonth(calendar: HistoricalCalendar, month: HistoricalMonth) {
    return this.http.put<HistoricalMonth>(`${this.getAdressAPI()}/${calendar.id}/month/${month.id}`, month);
  }

  deleteMonth(calendar: HistoricalCalendar, month: HistoricalMonth) {
    return this.http.delete(`${this.getAdressAPI()}/${calendar.id}/month/${month.id}`);
  }

  findAllMonths(idCalendar?: number){
    return this.http.get<any>(`${this.getAdressAPI()}/${idCalendar}/month`);
  }
}
