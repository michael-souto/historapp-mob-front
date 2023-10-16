import { Component, OnInit } from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit {
  selectedTab: any;

  constructor(
    private animationCtrl: AnimationController,
    private eventsService: EventsService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.eventsService.clearEvent();
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
    const tabButton = document.querySelector(
      `ion-tab-button[tab="${this.selectedTab}"]`
    );
    const fadeInAnimation = this.createFadeInAnimation(
      tabButton as HTMLElement
    );
    fadeInAnimation.keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' },
    ]);
    fadeInAnimation.play();
  }

  private createFadeInAnimation(baseEl: HTMLElement) {
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .duration(200)
      .easing('ease-in-out');
  }
}
