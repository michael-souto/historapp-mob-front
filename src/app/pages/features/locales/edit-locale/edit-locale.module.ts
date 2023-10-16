import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLocalePageRoutingModule } from './edit-locale-routing.module';

import { EditLocalePage } from './edit-locale.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLocalePageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditLocalePage]
})
export class EditLocalePageModule {}
