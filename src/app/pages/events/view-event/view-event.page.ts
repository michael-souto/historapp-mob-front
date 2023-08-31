import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Event } from 'src/app/models/event.model';
import { EventsService } from '../events.service';
import { Dialog, UtilsService } from 'src/app/services/utils.service';
import { CalendarsService } from '../../configs/calendars/calendars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Annotation } from 'src/app/models/annotation.model';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit {
  constructor(
    public eventsService: EventsService,
    private route: Router,
    public calendarsService: CalendarsService,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const id: number = this.activateRoute.snapshot.params['id'];
    if (!id != null) {
      this.eventsService.openEvent(id);
    }
  }

  showDialogDelete() {
    this.utilsService.presentActionSheet({
      header: 'Deseja deletar o evento?',
      buttons: [
        { text: 'Sim', handler: () => this.deleteEntity() },
        { text: 'Não' },
      ],
    });
  }

  deleteEntity() {
    this.eventsService.deleteEvent().subscribe(
      (response) => {
        this.eventsService.clearEvent();
        this.eventsService.tags = [];
        this.route.navigate(['events/list']);
        this.utilsService.presentToast('Evento excluído com sucesso!', false);
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, false);
      }
    );
  }

  get event(): Event {
    return this.eventsService.event;
  }

  set event(event: Event) {
    this.eventsService.event = event;
  }

  get annotations(): Annotation[] | undefined {
    return this.eventsService.annotations;
  }

  get datesStartOfPeriod(): string[] {
    let dates: string[] = [];
    this.eventsService.event.startOfPeriod?.datesCalendars?.forEach((x) =>
      dates.push(this.calendarsService.formatCalendarDateToString(x))
    );
    return dates;
  }

  get datesEndOfPeriod(): string[] {
    let dates: string[] = [];
    this.eventsService.event.endOfPeriod?.datesCalendars?.forEach((x) =>
      dates.push(this.calendarsService.formatCalendarDateToString(x))
    );
    return dates;
  }

  get charactersOfEvent(): string[] | undefined {
    return this.eventsService.event.characters?.map((x) => x.name ?? '');
  }

  get localesOfEvent(): string[] | undefined {
    return this.eventsService.event.locales?.map((x) => x.name ?? '');
  }

  back() {
    this.route.navigate(['events']);
  }
}
