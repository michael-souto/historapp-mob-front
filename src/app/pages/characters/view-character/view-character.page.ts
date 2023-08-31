import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CalendarsService } from '../../configs/calendars/calendars.service';
import { CharactersService } from '../characters.service';
import { UtilsService } from 'src/app/services/utils.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.page.html',
  styleUrls: ['./view-character.page.scss'],
})
export class ViewCharacterPage implements OnInit {
  constructor(
    public charactersService: CharactersService,
    private route: Router,
    public calendarsService: CalendarsService,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const id: number = this.activateRoute.snapshot.params['id'];
    if (!id != null) {
      this.charactersService.openCharacter(id);
    }
  }

  showDialogDelete() {
    this.utilsService.presentActionSheet({
      header: 'Deseja deletar este personagem?',
      buttons: [
        { text: 'Sim', handler: () => this.deleteEntity() },
        { text: 'Não' },
      ],
    });
  }

  deleteEntity() {
    this.charactersService.deleteCharacter().subscribe(
      (response) => {
        this.charactersService.clearCharacter();
        this.charactersService.tags = [];
        this.route.navigate(['characters/list']);
        this.utilsService.presentToast(
          'Personagem excluída com sucesso!',
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

  get character(): Character {
    return this.charactersService.character;
  }

  set character(character: Character) {
    this.charactersService.character = character;
  }

  get datesBirth(): string[] {
    let dates: string[] = [];
    this.charactersService.character.birthDate?.datesCalendars?.forEach((x) =>
      dates.push(this.calendarsService.formatCalendarDateToString(x))
    );
    return dates;
  }

  get datesDeath(): string[] {
    let dates: string[] = [];
    this.charactersService.character.deathDate?.datesCalendars?.forEach((x) =>
      dates.push(this.calendarsService.formatCalendarDateToString(x))
    );
    return dates;
  }
}
