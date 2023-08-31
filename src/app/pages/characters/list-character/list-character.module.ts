import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCharacterPageRoutingModule } from './list-character-routing.module';

import { ListCharacterPage } from './list-character.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCharacterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListCharacterPage]
})
export class ListCharacterPageModule {}
