import { Component, OnInit } from '@angular/core';
import { AnnotationsService } from '../../../annotations.service';
import { CharacterSearchService } from 'src/app/services/character/character-search.service';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-character-annotation',
  templateUrl: './search-character-annotation.page.html',
  styleUrls: ['./search-character-annotation.page.scss'],
})
export class SearchCharacterAnnotationPage {
  constructor(
    public annotationsService: AnnotationsService,
    public characterSearchService: CharacterSearchService,
    private route: Router,
    public utilsService: UtilsService
  ) {}

  addCharacterInAnnotation(character: Character) {
    this.annotationsService.addCharacter(character.id).subscribe(
      (response: any) => {
        this.annotationsService.annotation.characters.push(character);
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast(
          'Personagem relacionado com sucesso na anotação!',
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
