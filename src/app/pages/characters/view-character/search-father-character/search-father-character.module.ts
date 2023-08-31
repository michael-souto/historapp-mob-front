import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFatherCharacterPageRoutingModule } from './search-father-character-routing.module';

import { SearchFatherCharacterPage } from './search-father-character.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFatherCharacterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchFatherCharacterPage]
})
export class SearchFatherCharacterPageModule {}
