import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { AnnotationsService } from '../../annotations.service';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Locale } from 'src/app/models/locale.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-locales-annotation',
  templateUrl: './locales-annotation.page.html',
  styleUrls: ['./locales-annotation.page.scss'],
})
export class LocalesAnnotationPage implements OnInit {
  constructor(
    public utilsService: UtilsService,
    private service: AnnotationsService,
    private router: Router
  ) {}

  ngOnInit() {}

  get locales() {
    return this.service.annotation.locales;
  }

  presentActions(entity: Locale) {
    this.utilsService.presentActionSheet({
      header: 'Ações',
      buttons: [
        { text: 'Remover', handler: () => this.presentRemoveDialog(entity) },
        {
          text: 'Consultar',
          handler: () => this.router.navigate(['/locales/view', entity.id]),
        },
        { text: 'Cancelar' },
      ],
    });
  }

  private presentRemoveDialog(entity: Locale) {
    this.utilsService.presentActionSheet({
      header: 'Deseja remover o lugar da anotação?',
      buttons: [
        { text: 'Sim', handler: () => this.removeEntity(entity) },
        { text: 'Não' },
      ],
    });
  }

  private removeEntity(entity: Locale) {
    this.service.removeLocale(entity.id).subscribe(
      (response) => {
        this.router.navigate([this.utilsService.getDefautRouteAbove()]);
        this.utilsService.presentToast('Lugar removido com sucesso!', false);
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
