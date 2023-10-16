import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { EventsService } from '../../events.service';
import { Event } from 'src/app/models/event.model';
import { Annotation } from 'src/app/models/annotation.model';
import { AnnotationsService } from '../../../annotations/annotations.service';

@Component({
  selector: 'app-annotations-event',
  templateUrl: './annotations-event.page.html',
  styleUrls: ['./annotations-event.page.scss'],
})
export class AnnotationsEventPage implements OnInit {
  constructor(
    public utilsService: UtilsService,
    public eventsService: EventsService,
    public annotationsService: AnnotationsService
  ) {}

  ngOnInit() {}

  set event(event: Event) {
    this.eventsService.event = event;
  }

  get annotations(): Annotation[] | undefined {
    return this.eventsService.annotations;
  }
}
