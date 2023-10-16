import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEventPageRoutingModule } from './list-event-routing.module';

import { ListEventPage } from './list-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListEventPage]
})
export class ListEventPageModule {}
