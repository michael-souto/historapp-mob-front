import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Annotation } from 'src/app/models/annotation.model';
import { AnnotationSearchService } from 'src/app/services/annotation/annotation-search.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list-annotation',
  templateUrl: './list-annotation.page.html',
  styleUrls: ['./list-annotation.page.scss'],
})
export class ListAnnotationPage implements OnInit {
  constructor(
    private route: Router,
    private annotationSearchService: AnnotationSearchService,
    public utilsService: UtilsService
  ) {}

  list: Annotation[] = [];
  currentPage = 0;
  private keyword = '';

  ngOnInit() {}

  ionViewWillEnter() {
    this.list = [];
    this.currentPage = 0;
    this.search();
  }

  search() {
    this.annotationSearchService
      .searchByFilter(
        { title: this.keyword },
        this.currentPage,
        this.utilsService.NUMBER_OF_RECORDS
      )
      .subscribe((x) => {
        x.content?.forEach((annotation: Annotation) => {
          if (this.list.filter((x) => x.id == annotation.id)?.length == 0)
            this.list.push(annotation);
        });
      });
  }

  new() {
    this.route.navigate(['annotations/new']);
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
    this.currentPage = 0;
    this.search();
  }
}
