import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCharacterPageRoutingModule } from './view-character-routing.module';

import { ViewCharacterPage } from './view-character.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCharacterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViewCharacterPage]
})
export class ViewCharacterPageModule {}
