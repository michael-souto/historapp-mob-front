import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEventPage } from './edit-event.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditEventPage
  },
  {
    path: '',
    component: EditEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEventPageRoutingModule {}
