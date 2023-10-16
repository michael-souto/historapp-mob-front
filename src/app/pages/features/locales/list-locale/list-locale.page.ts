import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Locale } from 'src/app/models/locale.model';
import { LocaleSearchService } from 'src/app/services/locale/locale-search.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list-locale',
  templateUrl: './list-locale.page.html',
  styleUrls: ['./list-locale.page.scss'],
})
export class ListLocalePage implements OnInit {
  constructor(
    private route: Router,
    private localeSearchService: LocaleSearchService,
    public utilsService: UtilsService
  ) {}

  list: Locale[] = [];
  private currentPage = 0;
  private keyword = '';

  ngOnInit() {}

  ionViewWillEnter() {
    this.list = [];
    this.currentPage = 0;
    this.search();
  }

  search() {
    this.localeSearchService
      .searchByFilter(
        { name: this.keyword },
        this.currentPage,
        this.utilsService.NUMBER_OF_RECORDS
      )
      .subscribe((x) => {
        x.content?.forEach((character: Locale) => {
          this.list.push(character);
        });
      });
  }

  new() {
    this.route.navigate(['locales/new']);
  }

  onIonInfinite(ev: any) {
    this.currentPage += 1;
    this.search();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  handleInput(event: any) {
    this.list = [];
    this.keyword = event.target.value.toLowerCase();
    this.search();
  }
}
