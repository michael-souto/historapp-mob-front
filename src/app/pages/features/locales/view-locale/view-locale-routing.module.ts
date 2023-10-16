import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLocalePage } from './view-locale.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLocalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLocalePageRoutingModule {}
