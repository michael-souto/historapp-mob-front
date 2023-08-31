import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListLocalePageRoutingModule } from './list-locale-routing.module';

import { ListLocalePage } from './list-locale.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLocalePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListLocalePage]
})
export class ListLocalePageModule {}
