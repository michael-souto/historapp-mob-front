import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnotationsPageRoutingModule } from './annotations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnotationsPageRoutingModule
  ],
  declarations: []
})
export class AnnotationsPageModule {}
