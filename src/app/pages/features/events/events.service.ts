import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Annotation } from 'src/app/models/annotation.model';
import { Event } from 'src/app/models/event.model';
import { AnnotationCrudService } from 'src/app/services/annotation/annotation-crud.service';
import { AnnotationSearchService } from 'src/app/services/annotation/annotation-search.service';
import { EventCrudService } from 'src/app/services/event/event-crud.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    public eventCrudService: EventCrudService,
    private _router: Router,
    public annotationSearchService: AnnotationSearchService) {}

  public event: Event = this.eventCrudService.getNewClass();
  public annotations?: Annotation[] = [];

  public tags: string[] = [];

  openEvent(id: number) {
    return this.eventCrudService.findById(id).subscribe((response: Event)=> {
      this.event = response;
      this.event.characters = this.event.characters ?? [];
      this.event.locales = this.event.locales ?? [];
      this.getAnnotationsByEvents([id]).subscribe(x=> {
        this.annotations = x.content;
      })
    })
  }

  navigateToEvent(id: number) {
    this._router.navigate(['events', id])
  }

  saveEvent() {
    return this.eventCrudService.create(this.event);
  }

  deleteEvent() {
    return this.eventCrudService.delete(this.event.id);
  }

  clearEvent() {
    this.event = this.eventCrudService.getNewClass();
  }

  updateTags(){
    let tagFinal = '';
    this.tags?.forEach((t) => (tagFinal += t.trim() + ';'));
    this.event.tags = tagFinal;
    return this.eventCrudService.patch(this.event.id, { tags: tagFinal})
  }

  deleteStartOfPeriod() {
    return this.eventCrudService.deleteStartOfPeriod(
      this.event
    );
  }

  newEvent() {
    this.event = this.eventCrudService.getNewClass();
    this.tags = [];
  }

  saveStartOfPeriod() {
    return this.eventCrudService.setStartOfPeriod(
      this.event,
      this.event.startOfPeriod
    );
  }

  deleteEndOfPeriod() {
    return this.eventCrudService.deleteEndOfPeriod(
      this.event
    );
  }

  saveEndOfPeriod() {
    return this.eventCrudService.setEndOfPeriod(
      this.event,
      this.event.endOfPeriod
    );
  }

  addCharacter(characterId?: number) {
    return this.eventCrudService.addCharacter(
      this.event,
      characterId
    );
  }

  removeCharacter(characterId?: number) {
    return this.eventCrudService.removeCharacter(
      this.event,
      characterId
    );
  }

  addLocale(localeId?: number) {
    return this.eventCrudService.addLocale(
      this.event,
      localeId
    );
  }

  removeLocale(localeId?: number) {
    return this.eventCrudService.removeLocale(
      this.event,
      localeId
    );
  }

  getAnnotationsByEvents(eventsIds: number[]) {
    let filter = {
      eventsIds
    };
    return this.annotationSearchService.searchByFilter(filter, 0, 1000);
  }

  get eventIdSelected(): number {
    return Number(localStorage.getItem('eventIdSelected'));
  }

  set eventIdSelected(eventIdSelected: number) {
    localStorage.setItem('eventIdSelected', eventIdSelected?.toString());
  }
}
