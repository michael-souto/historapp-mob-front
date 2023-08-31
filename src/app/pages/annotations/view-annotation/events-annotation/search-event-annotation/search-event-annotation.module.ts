import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchEventAnnotationPageRoutingModule } from './search-event-annotation-routing.module';

import { SearchEventAnnotationPage } from './search-event-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchEventAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchEventAnnotationPage]
})
export class SearchEventAnnotationPageModule {}
