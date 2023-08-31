import { CharacterCrudService } from 'src/app/services/character/character-crud.service';
import { CharacterSearchService } from 'src/app/services/character/character-search.service';
import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from '../../characters.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-father-character',
  templateUrl: './search-father-character.page.html',
  styleUrls: ['./search-father-character.page.scss'],
})
export class SearchFatherCharacterPage {
  constructor(
    public charactersService: CharactersService,
    public characterSearchService: CharacterSearchService,
    public characterCRUDService: CharacterCrudService,
    private route: Router,
    public utilsService: UtilsService
  ) {}

  setFather(father: Character) {
    this.characterCRUDService
      .setFather(this.charactersService.character, father)
      .subscribe(
        (response) => {
          this.charactersService.character.father = father;
          this.route.navigate([
            'characters/view',
            this.charactersService.character.id,
          ]);
          this.utilsService.presentToast(
            'Pai atribuido ao personagem com sucesso!',
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
