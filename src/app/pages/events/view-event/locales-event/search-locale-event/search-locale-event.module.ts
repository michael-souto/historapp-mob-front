import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLocaleEventPageRoutingModule } from './search-locale-event-routing.module';

import { SearchLocaleEventPage } from './search-locale-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchLocaleEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchLocaleEventPage]
})
export class SearchLocaleEventPageModule {}
