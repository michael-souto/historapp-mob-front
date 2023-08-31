import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCalendarPage } from './list-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: ListCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCalendarPageRoutingModule {}
