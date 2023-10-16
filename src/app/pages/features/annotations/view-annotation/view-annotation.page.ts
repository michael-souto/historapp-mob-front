import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';
import { AnnotationsService } from '../annotations.service';


@Component({
  selector: 'app-view-annotation',
  templateUrl: './view-annotation.page.html',
  styleUrls: ['./view-annotation.page.scss'],
})
export class ViewAnnotationPage implements OnInit, OnDestroy {

  selectedTab: any;

  constructor(private animationCtrl: AnimationController, private annotationsService: AnnotationsService) { }

  ngOnInit() {
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
    const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`);
    const fadeInAnimation = this.createFadeInAnimation(tabButton as HTMLElement);
    fadeInAnimation.keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' }
    ]);
    fadeInAnimation.play();
  }

  private createFadeInAnimation(baseEl: HTMLElement) {
    return this.animationCtrl.create()
      .addElement(baseEl)
      .duration(200)
      .easing('ease-in-out');
  }

  ngOnDestroy() {
    this.annotationsService.clearAnnotation();
  }
}
