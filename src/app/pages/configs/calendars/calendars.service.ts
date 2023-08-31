import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CalendarDate } from 'src/app/models/calendar-date.model';
import { HistoricalCalendar } from 'src/app/models/historical-calendar.model';
import { HistoricalMonth } from 'src/app/models/historical-month.model';
import { CalendarCrudService } from 'src/app/services/calendar/calendar-crud.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarsService {

  constructor(public calendarCrudService: CalendarCrudService) {
    this.loadCalendars();
    console.log('Carregando calendários');
  }

  public calendar: HistoricalCalendar = this.calendarCrudService.getNewClass();
  public months: HistoricalMonth[] = [];
  public tag: string = '';
  public tags: string[] = [];

  public calendars?: HistoricalCalendar[];

  loadCalendars() {
    this.calendarCrudService.findAll().subscribe(x=> {
      this.calendars = x.content;
    })
  }

  getCalendarById(idCalendar?: number) {
    return this.calendars?.find(x=> x.id == idCalendar);
  }

  openCalendar(id: number) {
    const findCalendar$ = this.calendarCrudService.findById(id);
    const findMonths$ = this.calendarCrudService.findAllMonths(id);


    forkJoin([
      findCalendar$,
      findMonths$
    ]).subscribe(
      (response) => {
        this.calendar = response[0];
        this.months = response[1]['content'];
      },
      () => {},
      () => {}
    );
  }

  saveCalendar() {
    return this.calendarCrudService.create(this.calendar);
  }

  clearCalendar() {
    this.calendar = this.calendarCrudService.getNewClass();
  }

  addMonthInCalendar(calendar: HistoricalCalendar, month: HistoricalMonth) {
    return this.calendarCrudService.insertMonth(calendar, month);
  }

  updateMonthInCalendar(calendar: HistoricalCalendar, month: HistoricalMonth) {
    return this.calendarCrudService.updateMonth(calendar, month);
  }

  getMonthsOfCalendars(calendar: HistoricalCalendar) {
    return this.calendarCrudService.findAllMonths(calendar.id);
  }

  formatCalendarDateToString(dateCalendar?: CalendarDate) {
    if (dateCalendar) {
      let calendar = this.calendars?.find(x=> x.id == dateCalendar.idCalendar);
      return (
        (dateCalendar?.historicYear ? `${dateCalendar?.historicYear} ${dateCalendar.negativeYear ? calendar?.acronymForYearsBeforeZero : calendar?.acronymForYearsAfterZero}` : '????') +
        ' - ' +
        (dateCalendar?.nameHistoricMonth ?? '???????') +
        ' - ' +
        (dateCalendar?.historicDay ?? '??')
      );
    }
    return 'N/ Atribuída'
  }
}
