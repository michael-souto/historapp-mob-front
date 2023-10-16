import { Component, OnInit } from '@angular/core';
import { Locale } from 'src/app/models/locale.model';
import { UtilsService } from 'src/app/services/utils.service';
import { EventsService } from '../../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalesService } from '../../../locales/locales.service';

@Component({
  selector: 'app-locales-event',
  templateUrl: './locales-event.page.html',
  styleUrls: ['./locales-event.page.scss'],
})
export class LocalesEventPage implements OnInit {
  constructor(
    public utilsService: UtilsService,
    private service: EventsService,
    private _localesService: LocalesService
  ) {}

  ngOnInit() {}

  get locales() {
    return this.service.event.locales;
  }

  presentActions(entity: Locale) {
    this.utilsService.presentActionSheet({
      header: 'Ações',
      buttons: [
        { text: 'Remover', handler: () => this.presentRemoveDialog(entity) },
        {
          text: 'Consultar',
          handler: () => this._localesService.navigateToLocale(entity.id),
        },
        { text: 'Cancelar' },
      ],
    });
  }

  private presentRemoveDialog(entity: Locale) {
    this.utilsService.presentActionSheet({
      header: `Deseja desvincular o lugar '${entity.name}' deste evento?`,
      buttons: [
        { text: 'Sim', handler: () => this.removeEntity(entity) },
        { text: 'Não' },
      ],
    });
  }

  private removeEntity(entity: Locale) {
    this.service.removeLocale(entity.id).subscribe(
      (response) => {
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast(
          'Lugar desvinculado com sucesso!',
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
