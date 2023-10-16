import { Component, OnInit } from '@angular/core';
import { AnnotationsService } from '../../annotations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Annotation } from 'src/app/models/annotation.model';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";


@Component({
  selector: 'app-preview-annotation',
  templateUrl: './preview-annotation.page.html',
  styleUrls: ['./preview-annotation.page.scss'],
})
export class PreviewAnnotationPage implements OnInit {

  constructor(
    public annotationsService: AnnotationsService,
    private route: Router,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {
  }
  ionViewWillEnter() {
    const id = this.annotationsService.annotationIdSelected;
    if (!id != null) {
      this.annotationsService.openAnnotation(id);
    }
  }

  addTag(tag:string){
    this.annotationsService.updateTags().subscribe(
      (response) => {
        this.utilsService.presentToast('Tag adicionada com sucesso!', false);
      }
    );
  }

  removeTag(tags:string){
    this.annotationsService.updateTags().subscribe(
      (response) => {
        this.utilsService.presentToast('Tag removida com sucesso!', false);
      }
    );
  }

  get annotation(): Annotation {
    return this.annotationsService.annotation;
  }

  set annotation(annotation: Annotation) {
    this.annotationsService.annotation = annotation;
  }

  get charactersOfAnnotation(): string[] {
    return this.annotationsService.annotation.characters?.map(
      (x) => x.name ?? ''
    );
  }

  get localesOfAnnotation(): string[] {
    return this.annotationsService.annotation.locales?.map((x) => x.name ?? '');
  }

  get eventsOfAnnotation(): string[] {
    return this.annotationsService.annotation.events?.map((x) => x.title ?? '');
  }
  showDialogDelete() {
    this.utilsService.presentActionSheet({
      header: 'Deseja deletar a anotação?',
      buttons: [
        { text: 'Sim', handler: () => this.deleteEntity() },
        { text: 'Não' },
      ],
    });
  }

  deleteEntity() {
    this.annotationsService.deleteAnnotation().subscribe(
      (response) => {
        this.annotationsService.clearAnnotation();
        this.annotationsService.tags = [];
        this.route.navigate(['annotations/list']);
        this.utilsService.presentToast('Anotação excluída com sucesso!', false);
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

  async downloadPDF(htmlText: string, title: string) {
    const html = htmlToPdfmake(htmlText);
    const documentDefinition = { content: html };
    //title = title.split(/\.(?=[^\.]+$)/)[0].replace(/[^a-z0-9]/gi, '_').toLowerCase();
    pdfMake.createPdf(documentDefinition).download(`${title}.pdf`);
  }
}
