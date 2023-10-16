import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FamItemConfig,
  Enabled,
  PageFitMode,
  GroupByType,
  AnnotationType,
  AdviserPlacementType,
  ConnectorShapeType,
  LineType,
  ConnectorPlacementType,
  Colors,
  Size,
} from 'ngx-basic-primitives';
import { Character } from 'src/app/models/character.model';
import { CharacterCrudService } from 'src/app/services/character/character-crud.service';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-genealogy-character',
  templateUrl: './genealogy-character.page.html',
  styleUrls: ['./genealogy-character.page.scss'],
})
export class GenealogyCharacterPage {
  constructor(
    private characterCrudService: CharacterCrudService,
    private charactersService: CharactersService
  ) {}

  characters: Character[] = [];

  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items: FamItemConfig[] = [];

  onEditButtonClick(event: Event, itemConfig: FamItemConfig) {
    event.stopPropagation();
    this.charactersService.navigateToCharacter(Number(itemConfig.id));
  }

  ionViewWillEnter() {
    this.characterCrudService.findAllCharacters().subscribe((x) => {
      this.characters = x;
      this.items = this.characters.map((c) => {
        return new FamItemConfig({
          id: c.id,
          title: c.name,
          parents: this.getParentsFromCharacters(c),
          description: c.tags,
          image: './assets/icon/character.png',
          itemTitleColor: c.sex == 'F' ? '#4b0082' : 'black',
        });
      });
    });
  }

  getParentsFromCharacters(c: Character): number[] {
    let result: number[] = [];
    if (c.mother?.id != null) {
      result.push(c.mother?.id);
    }
    if (c.father?.id != null) {
      result.push(c.father?.id);
    }
    return result;
  }
}
