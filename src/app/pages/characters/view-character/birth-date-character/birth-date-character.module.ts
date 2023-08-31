import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthDateCharacterPageRoutingModule } from './birth-date-character-routing.module';

import { BirthDateCharacterPage } from './birth-date-character.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthDateCharacterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BirthDateCharacterPage]
})
export class BirthDateCharacterPageModule {}
