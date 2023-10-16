import { EventsService } from '../events.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../models/event.model';
import { ToastController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
  constructor(
    public eventsService: EventsService,
    private route: Router,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {}

  title: string = '';

  ionViewWillEnter() {
    const id: number = this.activateRoute.snapshot.params['id'];
    if (id != null && this.route.url.indexOf('/new') < 0) {
      this.title = `Editar evento - #${id}`;
      this.eventsService.openEvent(id);
    } else {
      this.title = `Novo evento`;
      this.eventsService.newEvent();
    }
  }

  saveEvent() {
    let tagFinal = '';
    this.eventsService.tags.forEach((t) => (tagFinal += t.trim() + ';'));
    this.eventsService.event.tags = tagFinal;
    this.eventsService.saveEvent().subscribe(
      (response) => {
        this.eventsService.clearEvent();
        this.eventsService.tags = [];
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast('Evento salvo com sucesso!', false);
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

  get event(): Event {
    return this.eventsService.event;
  }

  set event(event: Event) {
    this.eventsService.event = event;
  }
}
