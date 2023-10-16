import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCharacterPageRoutingModule } from './edit-character-routing.module';

import { EditCharacterPage } from './edit-character.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCharacterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditCharacterPage]
})
export class EditCharacterPageModule {}
