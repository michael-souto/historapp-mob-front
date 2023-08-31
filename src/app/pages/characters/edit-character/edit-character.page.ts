import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from '../characters.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.page.html',
  styleUrls: ['./edit-character.page.scss'],
})
export class EditCharacterPage implements OnInit {
  constructor(
    public charactersService: CharactersService,
    private route: Router,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  title: string = '';

  ngOnInit() {
    const id: number = this.activateRoute.snapshot.params['id'];
    if (id != null) {
      this.title = `Editar personagem - #${id}`;
      this.charactersService.openCharacter(id);
    } else {
      this.title = `Novo personagem`;
      this.charactersService.newCharacter();
    }
  }

  saveCharacter() {
    let tagFinal = '';
    this.charactersService.tags?.forEach((t) => (tagFinal += t.trim() + ';'));
    this.charactersService.character.tags = tagFinal;
    this.charactersService.saveCharacter().subscribe(
      (response) => {
        this.charactersService.clearCharacter();
        this.charactersService.tags = [];
        this.route.navigate(['characters/view', response.id]);
        this.utilsService.presentToast('Personagem salvo com sucesso!', false);
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

  get character(): Character {
    return this.charactersService.character;
  }

  set character(character: Character) {
    this.charactersService.character = character;
  }
}
