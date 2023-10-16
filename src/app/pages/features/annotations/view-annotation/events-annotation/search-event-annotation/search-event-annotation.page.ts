import { Component, OnInit } from '@angular/core';
import { AnnotationsService } from '../../../annotations.service';
import { EventSearchService } from 'src/app/services/event/event-search.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-event-annotation',
  templateUrl: './search-event-annotation.page.html',
  styleUrls: ['./search-event-annotation.page.scss'],
})
export class SearchEventAnnotationPage {
  constructor(
    public annotationsService: AnnotationsService,
    public eventSearchService: EventSearchService,
    private route: Router,
    public utilsService: UtilsService
  ) {}

  addEventInAnnotation(event: Event) {
    this.annotationsService.addEvent(event.id).subscribe(
      (response) => {
        this.annotationsService.annotation.events.push(event);
        this.route.navigate([
          `annotations/${this.annotationsService.annotation.id}/events`,
        ]);
        this.utilsService.presentToast(
          'Evento relacionado com sucesso na anotação!',
          false
        );
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
}
