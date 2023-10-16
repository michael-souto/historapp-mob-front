import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Annotation } from 'src/app/models/annotation.model';
import { AnnotationCrudService } from 'src/app/services/annotation/annotation-crud.service';
import { UtilsService } from 'src/app/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AnnotationsService {


  constructor(
    public annotationCrudService: AnnotationCrudService,
    public utilsService: UtilsService,
    private _router: Router
  ) {}

  private _annotation: Annotation = this.annotationCrudService.getNewClass();
  public tag: string = '';
  public tags?: string[] = [];

  newAnnotation() {
    this._annotation = this.annotationCrudService.getNewClass();
    this.tags = [];
    this.tag = '';
  }

  openAnnotation(id?: number) {
    return this.annotationCrudService
      .findById(id)
      .subscribe((response: Annotation) => {
        this._annotation = response;
        this.tags = this.utilsService.getArrayTags(response.tags);
        this._annotation.comments = this._annotation.comments ?? [];
        this._annotation.characters = this._annotation.characters ?? [];
        this._annotation.locales = this._annotation.locales ?? [];
        this._annotation.events = this._annotation.events ?? [];
      });
  }

  navigateToAnnotation(id: number) {
    this.annotationIdSelected = id;
    this._router.navigate(['annotations', id])
  }

  saveAnnotation() {
    let tagFinal = '';
    this.tags?.forEach((t) => (tagFinal += t.trim() + ';'));
    this._annotation.tags = tagFinal;
    return this.annotationCrudService.create(this._annotation);
  }

  clearAnnotation() {
    this._annotation = this.annotationCrudService.getNewClass();
  }

  deleteAnnotation() {
    return this.annotationCrudService.delete(this._annotation.id);
  }

  addCharacter(characterId?: number) {
    return this.annotationCrudService.addCharacter(
      this._annotation,
      characterId
    );
  }

  removeCharacter(characterId?: number) {
    return this.annotationCrudService.removeCharacter(
      this._annotation,
      characterId
    );
  }

  addLocale(localeId?: number) {
    return this.annotationCrudService.addLocale(
      this._annotation,
      localeId
    );
  }

  removeLocale(localeId?: number) {
    return this.annotationCrudService.removeLocale(
      this._annotation,
      localeId
    );
  }

  addEvent(eventId?: number) {
    return this.annotationCrudService.addEvent(
      this._annotation,
      eventId
    );
  }

  removeEvent(eventId?: number) {
    return this.annotationCrudService.removeEvent(
      this._annotation,
      eventId
    );
  }

  updateTags(){
    let tagFinal = '';
    this.tags?.forEach((t) => (tagFinal += t.trim() + ';'));
    this._annotation.tags = tagFinal;
    return this.annotationCrudService.patch(this._annotation.id, { tags: tagFinal})
  }

  public get annotation(): Annotation {
    return this._annotation;
  }

  public set annotation(annotation: Annotation) {
    this._annotation = annotation;
  }

  get annotationIdSelected(): number {
    return Number(localStorage.getItem('annotationIdSelected'));
  }

  set annotationIdSelected(annotationIdSelected: number) {
    localStorage.setItem('annotationIdSelected', annotationIdSelected?.toString());
  }
}
