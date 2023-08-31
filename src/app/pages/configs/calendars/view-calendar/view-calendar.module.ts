import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCalendarPageRoutingModule } from './view-calendar-routing.module';

import { ViewCalendarPage } from './view-calendar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCalendarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViewCalendarPage]
})
export class ViewCalendarPageModule {}
