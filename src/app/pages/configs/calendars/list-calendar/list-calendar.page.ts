import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoricalCalendar } from 'src/app/models/historical-calendar.model';
import { CalendarCrudService } from 'src/app/services/calendar/calendar-crud.service';

@Component({
  selector: 'app-list-calendar',
  templateUrl: './list-calendar.page.html',
  styleUrls: ['./list-calendar.page.scss'],
})
export class ListCalendarPage implements OnInit {

  constructor(private route: Router,
    private calendarCrudService: CalendarCrudService) { }


  list: HistoricalCalendar[] = [];
  currentPage = 0;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.list = [];
    this.currentPage = 0;
    this.load();
  }

  load() {
    this.calendarCrudService.findAllPaged(this.currentPage, 5).subscribe(x=> {
      x.content?.forEach((calendar:HistoricalCalendar) => {
        this.list.push(calendar);
      });
    });
  }

  new() {
    this.route.navigate(['configs/calendars/new']);
  }

  onIonInfinite(ev: any) {
    this.currentPage += 1;
    this.load();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
