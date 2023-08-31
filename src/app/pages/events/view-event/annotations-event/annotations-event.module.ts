import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnotationsEventPageRoutingModule } from './annotations-event-routing.module';

import { AnnotationsEventPage } from './annotations-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnotationsEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnnotationsEventPage]
})
export class AnnotationsEventPageModule {}
