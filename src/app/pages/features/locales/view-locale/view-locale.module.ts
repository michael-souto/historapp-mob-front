import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLocalePageRoutingModule } from './view-locale-routing.module';

import { ViewLocalePage } from './view-locale.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLocalePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViewLocalePage]
})
export class ViewLocalePageModule {}
