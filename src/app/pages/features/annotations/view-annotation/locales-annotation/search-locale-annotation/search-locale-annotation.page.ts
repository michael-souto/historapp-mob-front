import { Component, OnInit } from '@angular/core';
import { Locale } from 'src/app/models/locale.model';
import { AnnotationsService } from '../../../annotations.service';
import { LocaleSearchService } from 'src/app/services/locale/locale-search.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-locale-annotation',
  templateUrl: './search-locale-annotation.page.html',
  styleUrls: ['./search-locale-annotation.page.scss'],
})
export class SearchLocaleAnnotationPage {
  constructor(
    public annotationsService: AnnotationsService,
    public localeSearchService: LocaleSearchService,
    public utilsService: UtilsService
  ) {}

  addLocaleInAnnotation(locale: Locale) {
    this.annotationsService.addLocale(locale.id).subscribe(
      (response) => {
        this.annotationsService.annotation.locales.push(locale);
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast(
          'Lugar relacionado com sucesso na anotação!',
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
