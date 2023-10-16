import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAnnotationPageRoutingModule } from './edit-annotation-routing.module';

import { EditAnnotationPage } from './edit-annotation.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    EditAnnotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditAnnotationPage, HideHeaderDirective]
})
export class EditAnnotationPageModule {}
