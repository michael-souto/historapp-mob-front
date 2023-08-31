import { Component } from '@angular/core';
import { EventsService } from '../../events.service';
import { CalendarsService } from 'src/app/pages/configs/calendars/calendars.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CalendarDate } from 'src/app/models/calendar-date.model';
import { HistoricalDate } from 'src/app/models/historical-date.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-start-of-period-event',
  templateUrl: './start-of-period-event.page.html',
  styleUrls: ['./start-of-period-event.page.scss'],
})
export class StartOfPeriodEventPage {
  constructor(
    public eventsService: EventsService,
    public calendarsService: CalendarsService,
    private route: Router,
    public utilsService: UtilsService
  ) {}

  ionViewWillEnter() {
    if (this.eventsService.event.startOfPeriod != null) {
    } else {
      this.eventsService.event.startOfPeriod = new HistoricalDate();
      this.calendarsService.calendars?.forEach((x) => {
        let calendarDate = new CalendarDate();
        calendarDate.idCalendar = x.id;
        calendarDate.nameCalendar = x.name;
        this.eventsService.event.startOfPeriod?.datesCalendars?.push(
          calendarDate
        );
      });
    }
  }

  getDateByIdCalendar(idCalendar?: number) {
    let dateCalendar =
      this.eventsService.event.startOfPeriod?.datesCalendars?.find(
        (x) => x.idCalendar == idCalendar
      );
    return this.calendarsService.formatCalendarDateToString(dateCalendar);
  }

  onSaveDate(calendarDate: CalendarDate) {
    this.eventsService.event.startOfPeriod?.datesCalendars?.forEach((c) => {
      if (c.idCalendar == calendarDate.idCalendar) {
        c.historicDay = calendarDate.historicDay;
        c.historicMonth = calendarDate.historicMonth;
        c.historicYear = calendarDate.historicYear;
        c.idHistoricMonth = calendarDate.idHistoricMonth;
        c.nameHistoricMonth = calendarDate.nameHistoricMonth;
        c.negativeYear = calendarDate.negativeYear;
      }
    });

    this.eventsService.saveStartOfPeriod().subscribe(
      (response) => {
        this.route.navigate(['events/view', this.eventsService.event.id]);
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
    this.eventsService.deleteStartOfPeriod().subscribe(
      (response) => {
        this.route.navigate(['events/view', this.eventsService.event.id]);
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
