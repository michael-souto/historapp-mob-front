import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCharacterAnnotationPageRoutingModule } from './search-character-annotation-routing.module';

import { SearchCharacterAnnotationPage } from './search-character-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCharacterAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchCharacterAnnotationPage]
})
export class SearchCharacterAnnotationPageModule {}
