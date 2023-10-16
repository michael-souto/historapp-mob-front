import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewAnnotationPageRoutingModule } from './preview-annotation-routing.module';

import { PreviewAnnotationPage } from './preview-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PreviewAnnotationPage]
})
export class PreviewAnnotationPageModule {}
