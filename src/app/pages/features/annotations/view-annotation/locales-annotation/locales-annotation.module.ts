import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalesAnnotationPageRoutingModule } from './locales-annotation-routing.module';

import { LocalesAnnotationPage } from './locales-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalesAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LocalesAnnotationPage]
})
export class LocalesAnnotationPageModule {}
