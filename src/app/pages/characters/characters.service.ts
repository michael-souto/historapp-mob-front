import { Injectable } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterCrudService } from 'src/app/services/character/character-crud.service';
import { CalendarCrudService } from 'src/app/services/calendar/calendar-crud.service';
import { UtilsService } from 'src/app/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(
    public characterCrudService: CharacterCrudService,
    public calendarCrudService: CalendarCrudService,
    public utilsService: UtilsService
  ) {}

  private _character: Character = this.characterCrudService.getNewClass();
  public tags?: string[] = [];

  newCharacter() {
    this._character = this.characterCrudService.getNewClass();
    this.tags = [];
  }

  openCharacter(id: number) {
    return this.characterCrudService
      .findById(id)
      .subscribe((response: Character) => {
        this._character = response;
        this.tags = this.utilsService.getArrayTags(response.tags);
      });
  }

  saveCharacter() {
    return this.characterCrudService.create(this._character);
  }
  deleteCharacter() {
    return this.characterCrudService.delete(this._character.id);
  }
  clearCharacter() {
    this._character = this.characterCrudService.getNewClass();
  }

  saveBirthDate() {
    return this.characterCrudService.setBirthDate(
      this._character,
      this._character.birthDate
    );
  }

  deleteBirthDate() {
    return this.characterCrudService.deleteBirthDate(
      this._character,
      this._character.birthDate
    );
  }

  saveDeathDate() {
    return this.characterCrudService.setDeathhDate(
      this._character,
      this._character.deathDate
    );
  }

  deleteDeathDate() {
    return this.characterCrudService.deleteDeathDate(
      this._character,
      this._character.deathDate
    );
  }

  public get character(): Character {
    return this._character;
  }

  public set character(character: Character) {
    this._character = character;
  }
}
