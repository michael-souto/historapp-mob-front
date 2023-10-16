import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewEventPage } from './preview-event.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewEventPageRoutingModule {}
