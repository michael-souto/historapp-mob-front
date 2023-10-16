import { Component } from '@angular/core';
import { EventsService } from '../../../events.service';
import { LocaleSearchService } from 'src/app/services/locale/locale-search.service';
import { Locale } from 'src/app/models/locale.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-locale-event',
  templateUrl: './search-locale-event.page.html',
  styleUrls: ['./search-locale-event.page.scss'],
})
export class SearchLocaleEventPage {
  constructor(
    public eventsService: EventsService,
    public localeSearchService: LocaleSearchService,
    public utilsService: UtilsService
  ) {}

  addLocaleInEvent(locale: Locale) {
    this.eventsService.addLocale(locale.id).subscribe(
      (response) => {
        this.eventsService.event.locales?.push(locale);
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast(
          'Lugar relacionado com sucesso ao evento!',
          false
        );
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
}
