import { Component } from '@angular/core';
import { EventsService } from '../../events.service';
import { CalendarsService } from 'src/app/pages/features/configs/calendars/calendars.service';
import { HistoricalDate } from 'src/app/models/historical-date.model';
import { CalendarDate } from 'src/app/models/calendar-date.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-end-of-period-event',
  templateUrl: './end-of-period-event.page.html',
  styleUrls: ['./end-of-period-event.page.scss'],
})
export class EndOfPeriodEventPage {
  constructor(
    public eventsService: EventsService,
    public calendarsService: CalendarsService,
    public utilsService: UtilsService
  ) {}

  ionViewWillEnter() {
    if (this.eventsService.event.endOfPeriod != null) {
    } else {
      this.eventsService.event.endOfPeriod = new HistoricalDate();
      this.calendarsService.calendars?.forEach((x) => {
        let calendarDate = new CalendarDate();
        calendarDate.idCalendar = x.id;
        calendarDate.nameCalendar = x.name;
        this.eventsService.event.endOfPeriod?.datesCalendars?.push(
          calendarDate
        );
      });
    }
  }

  getDateByIdCalendar(idCalendar?: number) {
    let dateCalendar =
      this.eventsService.event.endOfPeriod?.datesCalendars?.find(
        (x) => x.idCalendar == idCalendar
      );
    return this.calendarsService.formatCalendarDateToString(dateCalendar);
  }

  onSaveDate(calendarDate: CalendarDate) {
    this.eventsService.event.endOfPeriod?.datesCalendars?.forEach((c) => {
      if (c.idCalendar == calendarDate.idCalendar) {
        c.historicDay = calendarDate.historicDay;
        c.historicMonth = calendarDate.historicMonth;
        c.historicYear = calendarDate.historicYear;
        c.idHistoricMonth = calendarDate.idHistoricMonth;
        c.nameHistoricMonth = calendarDate.nameHistoricMonth;
        c.negativeYear = calendarDate.negativeYear;
      }
    });

    this.eventsService.saveEndOfPeriod().subscribe(
      (response) => {
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast('Data adicionada com sucesso!', false);
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, true);
      }
    );
  }

  private onDeleteDate() {
    this.eventsService.deleteEndOfPeriod().subscribe(
      (response) => {
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast('Data removida com sucesso!', false);
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, true);
      }
    );
  }

  presentActions() {
    this.utilsService.presentActionSheet({
      header: 'Deseja limpar as datas?',
      buttons: [
        { text: 'Sim', handler: () => this.onDeleteDate() },
        { text: 'Não' },
      ],
    });
  }
}
