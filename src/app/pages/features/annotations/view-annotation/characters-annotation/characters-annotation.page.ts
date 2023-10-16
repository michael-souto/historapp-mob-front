import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { AnnotationsService } from '../../annotations.service';
import { CharactersService } from '../../../characters/characters.service';

@Component({
  selector: 'app-characters-annotation',
  templateUrl: './characters-annotation.page.html',
  styleUrls: ['./characters-annotation.page.scss'],
})
export class CharactersAnnotationPage {
  constructor(
    public utilsService: UtilsService,
    private _service: AnnotationsService,
    private _charactersServices: CharactersService
  ) {}

  get characters() {
    return this._service.annotation.characters;
  }

  presentActions(entity: Character) {
    this.utilsService.presentActionSheet({
      header: 'Ações',
      buttons: [
        { text: 'Remover', handler: () => this.presentRemoveDialog(entity) },
        {
          text: 'Consultar',
          handler: () => this._charactersServices.navigateToCharacter(entity.id),
        },
        { text: 'Cancelar' },
      ],
    });
  }

  private presentRemoveDialog(entity: Character) {
    this.utilsService.presentActionSheet({
      header: 'Deseja remover o personagem da anotação?',
      buttons: [
        { text: 'Sim', handler: () => this.removeEntity(entity) },
        { text: 'Não' },
      ],
    });
  }

  private removeEntity(entity: Character) {
    this._service.removeCharacter(entity.id).subscribe(
      (response) => {
        this.utilsService.backMyBaseRoute();
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
