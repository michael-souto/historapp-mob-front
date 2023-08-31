import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathDateCharacterPageRoutingModule } from './death-date-character-routing.module';

import { DeathDateCharacterPage } from './death-date-character.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathDateCharacterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeathDateCharacterPage]
})
export class DeathDateCharacterPageModule {}
