import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCharacterEventPageRoutingModule } from './search-character-event-routing.module';

import { SearchCharacterEventPage } from './search-character-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCharacterEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchCharacterEventPage]
})
export class SearchCharacterEventPageModule {}
