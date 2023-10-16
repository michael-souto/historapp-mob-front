import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAnnotationPageRoutingModule } from './view-annotation-routing.module';

import { ViewAnnotationPage } from './view-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViewAnnotationPage]
})
export class ViewAnnotationPageModule {}
