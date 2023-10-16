import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCalendarPageRoutingModule } from './list-calendar-routing.module';

import { ListCalendarPage } from './list-calendar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCalendarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListCalendarPage]
})
export class ListCalendarPageModule {}
