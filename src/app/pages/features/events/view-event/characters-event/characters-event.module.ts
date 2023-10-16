import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersEventPageRoutingModule } from './characters-event-routing.module';

import { CharactersEventPage } from './characters-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CharactersEventPage]
})
export class CharactersEventPageModule {}
