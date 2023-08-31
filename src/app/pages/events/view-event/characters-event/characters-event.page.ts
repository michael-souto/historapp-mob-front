import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { EventsService } from '../../events.service';
import { Character } from 'src/app/models/character.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-event',
  templateUrl: './characters-event.page.html',
  styleUrls: ['./characters-event.page.scss'],
})
export class CharactersEventPage implements OnInit {
  constructor(
    public utilsService: UtilsService,
    private service: EventsService,
    private router: Router
  ) {}

  ngOnInit() {}

  get characters() {
    return this.service.event.characters;
  }

  presentActions(entity: Character) {
    this.utilsService.presentActionSheet({
      header: 'Ações',
      buttons: [
        { text: 'Remover', handler: () => this.presentRemoveDialog(entity) },
        {
          text: 'Consultar',
          handler: () => this.router.navigate(['/characters/view', entity.id]),
        },
        { text: 'Cancelar' },
      ],
    });
  }

  private presentRemoveDialog(entity: Character) {
    this.utilsService.presentActionSheet({
      header: 'Deseja remover o personagem do evento?',
      buttons: [
        { text: 'Sim', handler: () => this.removeEntity(entity) },
        { text: 'Não' },
      ],
    });
  }

  private removeEntity(entity: Character) {
    this.service.removeCharacter(entity.id).subscribe(
      (response) => {
        this.router.navigate([this.utilsService.getDefautRouteAbove()]);
        this.utilsService.presentToast(
          'Personagem removido com sucesso!',
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
