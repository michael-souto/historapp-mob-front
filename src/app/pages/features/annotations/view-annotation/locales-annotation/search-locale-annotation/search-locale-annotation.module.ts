import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLocaleAnnotationPageRoutingModule } from './search-locale-annotation-routing.module';

import { SearchLocaleAnnotationPage } from './search-locale-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchLocaleAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchLocaleAnnotationPage]
})
export class SearchLocaleAnnotationPageModule {}
