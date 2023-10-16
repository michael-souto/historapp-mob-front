import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndOfPeriodEventPageRoutingModule } from './end-of-period-event-routing.module';

import { EndOfPeriodEventPage } from './end-of-period-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndOfPeriodEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EndOfPeriodEventPage]
})
export class EndOfPeriodEventPageModule {}
