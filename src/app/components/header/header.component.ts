import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router, public utilsService: UtilsService) {}

  @Input() title: string = '';
  @Input() routeBase: string = this.utilsService.getDefautRouteAbove();
  @Input() showBackButton: boolean = true;
  @Output() onHandleInput = new EventEmitter<any>();

  ngOnInit() {}

  back() {
    this.route.navigate([this.routeBase]);
  }

  handleInput(content: any) {
    this.onHandleInput.emit(content);
  }
}
