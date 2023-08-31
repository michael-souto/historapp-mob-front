import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-annotations-event',
  templateUrl: './annotations-event.page.html',
  styleUrls: ['./annotations-event.page.scss'],
})
export class AnnotationsEventPage implements OnInit {

  constructor(    public utilsService: UtilsService) { }

  ngOnInit() {
  }

}
