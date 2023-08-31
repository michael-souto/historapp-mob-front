import { Component } from '@angular/core';
import { CharacterSearchService } from 'src/app/services/character/character-search.service';
import { EventsService } from '../../../events.service';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-character-event',
  templateUrl: './search-character-event.page.html',
  styleUrls: ['./search-character-event.page.scss'],
})
export class SearchCharacterEventPage {
  constructor(
    public eventsService: EventsService,
    public characterSearchService: CharacterSearchService,
    private route: Router,
    public utilsService: UtilsService
  ) {}

  addCharacterInEvent(character: Character) {
    this.eventsService.addCharacter(character.id).subscribe(
      (response) => {
        this.eventsService.event.characters?.push(character);
        this.route.navigate([
          `events/view/${this.eventsService.event.id}/characters`,
        ]);
        this.utilsService.presentToast(
          'Personagem relacionado com sucesso ao evento!',
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
