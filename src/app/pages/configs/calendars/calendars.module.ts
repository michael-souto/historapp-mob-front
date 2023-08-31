import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarsPageRoutingModule } from './calendars-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CalendarsPageRoutingModule],
  declarations: [],
  exports: [],
})
export class CalendarsPageModule {}
