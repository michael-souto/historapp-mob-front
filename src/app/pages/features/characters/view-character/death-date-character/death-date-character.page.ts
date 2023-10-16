import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { CalendarDate } from 'src/app/models/calendar-date.model';
import { HistoricalDate } from 'src/app/models/historical-date.model';
import { CalendarsService } from 'src/app/pages/features/configs/calendars/calendars.service';
import { CharactersService } from '../../characters.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-death-date-character',
  templateUrl: './death-date-character.page.html',
  styleUrls: ['./death-date-character.page.scss'],
})
export class DeathDateCharacterPage {
  constructor(
    public charactersService: CharactersService,
    public calendarsService: CalendarsService,
    private route: Router,
    public utilsService: UtilsService
  ) {}

  ionViewWillEnter() {
    if (this.charactersService.character.deathDate != null) {
    } else {
      this.charactersService.character.deathDate = new HistoricalDate();
      this.calendarsService.calendars?.forEach((x) => {
        let calendarDate = new CalendarDate();
        calendarDate.idCalendar = x.id;
        calendarDate.nameCalendar = x.name;
        this.charactersService.character.deathDate?.datesCalendars?.push(
          calendarDate
        );
      });
    }
  }

  getDateByIdCalendar(idCalendar?: number) {
    let dateCalendar =
      this.charactersService.character.deathDate?.datesCalendars?.find(
        (x) => x.idCalendar == idCalendar
      );
    return this.calendarsService.formatCalendarDateToString(dateCalendar);
  }

  onSaveDate(calendarDate: CalendarDate) {
    this.charactersService.character.deathDate?.datesCalendars?.forEach((c) => {
      if (c.idCalendar == calendarDate.idCalendar) {
        c.historicDay = calendarDate.historicDay;
        c.historicMonth = calendarDate.historicMonth;
        c.historicYear = calendarDate.historicYear;
        c.idHistoricMonth = calendarDate.idHistoricMonth;
        c.nameHistoricMonth = calendarDate.nameHistoricMonth;
        c.negativeYear = calendarDate.negativeYear;
      }
    });

    this.charactersService.saveDeathDate().subscribe(
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

  onDeleteDate() {
    this.charactersService.deleteDeathDate().subscribe(
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
