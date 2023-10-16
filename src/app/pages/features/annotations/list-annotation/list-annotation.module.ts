import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAnnotationPageRoutingModule } from './list-annotation-routing.module';

import { ListAnnotationPage } from './list-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAnnotationPageRoutingModule,

    ComponentsModule
  ],
  declarations: [ListAnnotationPage]
})
export class ListAnnotationPageModule {}
