import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalesEventPageRoutingModule } from './locales-event-routing.module';

import { LocalesEventPage } from './locales-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalesEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LocalesEventPage]
})
export class LocalesEventPageModule {}
