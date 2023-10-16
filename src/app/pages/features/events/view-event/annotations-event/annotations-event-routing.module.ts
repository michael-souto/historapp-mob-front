import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnotationsEventPage } from './annotations-event.page';

const routes: Routes = [
  {
    path: '',
    component: AnnotationsEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnotationsEventPageRoutingModule {}
