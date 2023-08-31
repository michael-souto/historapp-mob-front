import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnotationsService } from '../annotations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Annotation } from 'src/app/models/annotation.model';
import { UtilsService } from 'src/app/services/utils.service';
import {
  ContentChange,
  QuillEditorComponent,
  SelectionChange,
} from 'ngx-quill';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-edit-annotation',
  templateUrl: './edit-annotation.page.html',
  styleUrls: ['./edit-annotation.page.scss'],
})
export class EditAnnotationPage {
  constructor(
    public annotationsService: AnnotationsService,
    private route: Router,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  title: string = '';

  @ViewChild('editor', { static: true }) editor?: QuillEditorComponent;

  id?: number;

  ionViewWillEnter() {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id != null) {
      this.title = `Editar anotação - #${this.id}`;
      this.annotationsService.openAnnotation(this.id);
    } else {
      this.title = `Nova anotação`;
      this.annotationsService.newAnnotation();
    }
    this.editor?.quillEditor?.focus();
  }

  saveAnnotation(redirect = true) {
    this.utilsService.setNullInNewIds(this.newsIds, this.annotation.comments);
    this.annotationsService.saveAnnotation().subscribe(
      (response) => {
        this.annotation.id = response.id;
        if (redirect) {
          this.annotationsService.clearAnnotation();
          this.annotationsService.tags = [];
          this.route.navigate(['annotations/view', response.id]);
        }
        this.utilsService.presentToast('Anotação salva com sucesso!', false);
      },
      (response: HttpErrorResponse) => {
        this.utilsService.reloadIds(this.newsIds, this.annotation.comments);

        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, true);
      }
    );
  }

  get annotation(): Annotation {
    return this.annotationsService.annotation;
  }

  set annotation(annotation: Annotation) {
    this.annotationsService.annotation = annotation;
  }

  canComment = false;
  editComment = new Comment();
  newsIds: number[] = [];

  @ViewChild(IonModal) modal?: IonModal;

  setComment(comment: Comment) {
    this.editComment = comment;
  }

  delete() {
    this.utilsService.removeItemListGrid(
      this.editComment,
      this.annotation.comments,
      this.newsIds
    );
    this.cancel();
  }

  onSelection(event: SelectionChange) {
    this.canComment =
      ((event.range?.length ?? 0) > 0 &&
        this.editor?.quillEditor
          .getText(event.range?.index, event.range?.length)
          .trim() !== '') ??
      false;
  }

  rangeSelectedCanComment(range: any): boolean {
    return (
      ((range?.length ?? 0) > 0 &&
        this.editor?.quillEditor.getText(range?.index, range?.length).trim() !==
          '') ??
      false
    );
  }

  willPresentComment() {
    let range = this.editor?.quillEditor.getSelection();
    if (this.rangeSelectedCanComment(range)) {
      this.editComment.textReference = this.editor?.quillEditor
        .getText(range?.index, range?.length)
        .trim();
      this.editComment.indexReference = range?.index;
      this.editComment.lengthReference = range?.length;
    }
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
    this.editComment = new Comment();
  }

  confirm() {
    this.modal?.dismiss(this.editComment, 'confirm');
    this.editor?.quillEditor.formatText(
      this.editComment.indexReference ?? 0,
      this.editComment.lengthReference ?? 0,
      {
        background: this.utilsService.COLOR_COMMENT,
      }
    );
    this.utilsService.addItemListGrid(
      this.editComment,
      this.annotation.comments,
      this.newsIds
    );
    this.editComment = new Comment();
  }

  timeLeft: number = 0;
  interval: any;

  onContentChanged(event: ContentChange) {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.timeLeft < 2) {
        this.timeLeft++;
      } else {
        this.timeLeft = 0;
        clearInterval(this.interval);
        this.saveAnnotation(false);
      }
    }, 5000);
  }
}
