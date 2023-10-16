import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMotherCharacterPageRoutingModule } from './search-mother-character-routing.module';

import { SearchMotherCharacterPage } from './search-mother-character.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMotherCharacterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchMotherCharacterPage]
})
export class SearchMotherCharacterPageModule {}
