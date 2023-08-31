import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { SearchService } from 'src/app/services/pattern/search.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-entity',
  templateUrl: './search-entity.component.html',
  styleUrls: ['./search-entity.component.scss'],
})
export class SearchEntityComponent implements OnInit {
  constructor(private router: Router, public utilsService: UtilsService) {}

  @Input() service?: SearchService<any>;

  @Input() title: string = '';

  items?: any[] = [];

  @Input() firstLine: string = '';
  @Input() secondLine: string = '';
  @Input() thirdLine: string = '';

  @Input() showThumbnail: boolean = false;
  @Input() fieldThumbnail: string = '';
  @Input() defaultThumbnail: string = '';

  @Output() onSelectEntity = new EventEmitter<any>();

  private currentPage = 0;

  private keyword = '';

  ngOnInit() {
    this.keyword = '';
    this.search();
  }

  handleInput(event: any) {
    this.keyword = event.target.value.toLowerCase();
    this.search();
  }

  selectEntity(entity: any) {
    this.onSelectEntity.emit(entity);
  }

  search() {
    this.service
      ?.search(
        this.keyword,
        this.currentPage,
        this.utilsService.NUMBER_OF_RECORDS
      )
      .subscribe((x) => {
        this.items = x.content;
      });
  }

  getDefautRouteAbove() {
    return this.router.url.substring(0, this.router.url.lastIndexOf('/'));
  }

  onIonInfinite(ev: any) {
    this.currentPage += 1;
    this.search();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
