import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartOfPeriodEventPage } from './start-of-period-event.page';

const routes: Routes = [
  {
    path: '',
    component: StartOfPeriodEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartOfPeriodEventPageRoutingModule {}
