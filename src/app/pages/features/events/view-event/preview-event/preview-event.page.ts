import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/models/event.model';
import { EventsService } from '../../events.service';
import { UtilsService } from 'src/app/services/utils.service';
import { CalendarsService } from '../../../configs/calendars/calendars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AnnotationsService } from '../../../annotations/annotations.service';

@Component({
  selector: 'app-preview-event',
  templateUrl: './preview-event.page.html',
  styleUrls: ['./preview-event.page.scss'],
})
export class PreviewEventPage implements OnInit {
  constructor(
    public eventsService: EventsService,
    public annotationsService: AnnotationsService,
    public calendarsService: CalendarsService,
    public utilsService: UtilsService,
    protected activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const id: number = this.eventsService.eventIdSelected;
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
  addTag(tag: string) {
    this.eventsService.updateTags().subscribe((response) => {
      this.utilsService.presentToast('Tag adicionada com sucesso!', false);
    });
  }

  removeTag(tags: string) {
    this.eventsService.updateTags().subscribe((response) => {
      this.utilsService.presentToast('Tag removida com sucesso!', false);
    });
  }
  deleteEntity() {
    this.eventsService.deleteEvent().subscribe(
      (response) => {
        this.eventsService.clearEvent();
        this.eventsService.tags = [];
        this.utilsService.backMyBaseRoute();
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
}
