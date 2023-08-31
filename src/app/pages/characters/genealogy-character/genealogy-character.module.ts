import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenealogyCharacterPageRoutingModule } from './genealogy-character-routing.module';

import { GenealogyCharacterPage } from './genealogy-character.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BasicPrimitivesModule } from 'ngx-basic-primitives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenealogyCharacterPageRoutingModule,
    ComponentsModule,
    BasicPrimitivesModule
  ],
  declarations: [GenealogyCharacterPage]
})
export class GenealogyCharacterPageModule {}
