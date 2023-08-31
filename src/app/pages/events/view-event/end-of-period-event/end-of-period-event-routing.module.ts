import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndOfPeriodEventPage } from './end-of-period-event.page';

const routes: Routes = [
  {
    path: '',
    component: EndOfPeriodEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndOfPeriodEventPageRoutingModule {}
