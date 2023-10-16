import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarsService } from '../calendars.service';
import { HistoricalCalendar } from 'src/app/models/historical-calendar.model';
import { HistoricalMonth } from 'src/app/models/historical-month.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.page.html',
  styleUrls: ['./view-calendar.page.scss'],
})
export class ViewCalendarPage {

  constructor(public calendarsService: CalendarsService,
    private route: Router,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService) { }


  monthEdit: HistoricalMonth = new HistoricalMonth();
  isModalOpenMonth = false;

  ionViewDidLeave() {
    this.calendarsService.loadCalendars();
  }

  ionViewWillEnter() {
    this.calendarsService.clearCalendar();
    const id: number = this.activateRoute.snapshot.params['id'];
      if (!id != null) {
        this.calendarsService.openCalendar(id);
      }
  }

  get calendar(): HistoricalCalendar {
    return this.calendarsService.calendar;
  }

  set calendar(calendar: HistoricalCalendar) {
    this.calendarsService.calendar = calendar;
  }

  get months(): HistoricalMonth[] {
    return this.calendarsService.months;
  }

  set months(months: HistoricalMonth[]) {
    this.calendarsService.months = months;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpenMonth = isOpen;
  }

  editMonth(month: HistoricalMonth) {
    this.monthEdit = month;
    this.setOpen(true);
  }

  cancelMonth() {
    this.setOpen(false);
    this.monthEdit = new HistoricalMonth();
  }

  saveMonth() {
    if (this.monthEdit.id == null) {
      this.calendarsService.addMonthInCalendar(this.calendar, this.monthEdit).subscribe((x: any) => {
        this.calendarsService.months.push(x);
        this.utilsService.presentToast('Mês adicionado com sucesso!', false);
        this.calendarsService.getCalendarById(this.calendar.id)?.months?.push(this.monthEdit);
        this.cancelMonth();
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, true);
      }
      )
    } else {
      this.calendarsService.updateMonthInCalendar(this.calendar, this.monthEdit).subscribe((x: any) => {
        this.utilsService.presentToast('Mês atualizado com sucesso!', false);
        this.cancelMonth();
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, true);
      }
      )
    }
  }

  back() {
    this.route.navigate(['configs/calendars']);
  }
}
