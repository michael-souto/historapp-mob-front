import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersAnnotationPageRoutingModule } from './characters-annotation-routing.module';

import { CharactersAnnotationPage } from './characters-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CharactersAnnotationPage]
})
export class CharactersAnnotationPageModule {}
