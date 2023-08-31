import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Event } from 'src/app/models/event.model';
import { EventSearchService } from 'src/app/services/event/event-search.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss'],
})
export class ListEventPage implements OnInit {

  constructor(private route: Router,
    private eventSearchService: EventSearchService,
    public utilsService: UtilsService) { }


  list: Event[] = [];
  private currentPage = 0;
  private keyword = '';

  ngOnInit() {}

  ionViewWillEnter() {
    this.list = [];
    this.currentPage = 0;
    this.search();
  }

  search() {
    this.eventSearchService
      .searchByFilter(
        { all: this.keyword },
        this.currentPage,
        this.utilsService.NUMBER_OF_RECORDS
      )
      .subscribe((x) => {
        x.content?.forEach((character: Event) => {
          this.list.push(character);
        });
      });
  }

  new() {
    this.route.navigate(['events/new']);
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
