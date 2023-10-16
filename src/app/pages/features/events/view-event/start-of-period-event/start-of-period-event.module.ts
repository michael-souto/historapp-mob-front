import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartOfPeriodEventPageRoutingModule } from './start-of-period-event-routing.module';

import { StartOfPeriodEventPage } from './start-of-period-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartOfPeriodEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StartOfPeriodEventPage]
})
export class StartOfPeriodEventPageModule {}
