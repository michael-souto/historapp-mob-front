import { Character } from 'src/app/models/character.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { CharacterSearchService } from 'src/app/services/character/character-search.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.page.html',
  styleUrls: ['./list-character.page.scss'],
})
export class ListCharacterPage implements OnInit {
  constructor(
    private route: Router,
    private characterSearchService: CharacterSearchService,
    public utilsService: UtilsService
  ) {}

  list: Character[] = [];
  private currentPage = 0;
  private keyword = '';

  ngOnInit() {}

  ionViewWillEnter() {
    this.list = [];
    this.currentPage = 0;
    this.search();
  }

  search() {
    this.characterSearchService
      .searchByFilter(
        { name: this.keyword },
        this.currentPage,
        this.utilsService.NUMBER_OF_RECORDS
      )
      .subscribe((x) => {
        x.content?.forEach((character: Character) => {
          this.list.push(character);
        });
      });
  }

  new() {
    this.route.navigate(['characters/new']);
  }

  onIonInfinite(ev: any) {
    this.currentPage += 1;
    this.search();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  handleInput(event: any) {
    this.currentPage = 0;
    this.list = [];
    this.keyword = event.target.value.toLowerCase();
    this.search();
  }
}
