import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewEventPageRoutingModule } from './preview-event-routing.module';

import { PreviewEventPage } from './preview-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PreviewEventPage]
})
export class PreviewEventPageModule {}
