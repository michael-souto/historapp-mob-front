import { CharacterCrudService } from 'src/app/services/character/character-crud.service';
import { CharacterSearchService } from 'src/app/services/character/character-search.service';
import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from '../../characters.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-mother-character',
  templateUrl: './search-mother-character.page.html',
  styleUrls: ['./search-mother-character.page.scss'],
})
export class SearchMotherCharacterPage {
  constructor(
    public charactersService: CharactersService,
    public characterSearchService: CharacterSearchService,
    public characterCRUDService: CharacterCrudService,
    private route: Router,
    public utilsService: UtilsService
  ) {}

  setMother(mother: Character) {
    this.characterCRUDService
      .setMother(this.charactersService.character, mother)
      .subscribe(
        (response) => {
          this.charactersService.character.mother = mother;
          this.utilsService.backMyBaseRoute();
          this.utilsService.presentToast(
            'Mãe atribuida ao personagem com sucesso!',
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