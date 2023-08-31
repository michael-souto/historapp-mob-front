import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEventPage } from './list-event.page';

const routes: Routes = [
  {
    path: '',
    component: ListEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEventPageRoutingModule {}
