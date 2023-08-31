import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsAnnotationPageRoutingModule } from './events-annotation-routing.module';

import { EventsAnnotationPage } from './events-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EventsAnnotationPage]
})
export class EventsAnnotationPageModule {}
