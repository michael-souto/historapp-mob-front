import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { AnnotationsService } from '../../annotations.service';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-events-annotation',
  templateUrl: './events-annotation.page.html',
  styleUrls: ['./events-annotation.page.scss'],
})
export class EventsAnnotationPage {
  constructor(
    public utilsService: UtilsService,
    private service: AnnotationsService,
    private router: Router
  ) {}

  get events() {
    return this.service.annotation.events;
  }

  presentActions(entity: Event) {
    this.utilsService.presentActionSheet({
      header: 'Ações',
      buttons: [
        { text: 'Remover', handler: () => this.presentRemoveDialog(entity) },
        {
          text: 'Consultar',
          handler: () => this.router.navigate(['/events', entity.id]),
        },
        { text: 'Cancelar' },
      ],
    });
  }

  private presentRemoveDialog(entity: Event) {
    this.utilsService.presentActionSheet({
      header: 'Deseja remover o evento da anotação?',
      buttons: [
        { text: 'Sim', handler: () => this.removeEntity(entity) },
        { text: 'Não' },
      ],
    });
  }

  private removeEntity(entity: Event) {
    this.service.removeEvent(entity.id).subscribe(
      (response) => {
        this.router.navigate([this.utilsService.getDefautRouteAbove()]);
        this.utilsService.presentToast('Evento removido com sucesso!', false);
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
