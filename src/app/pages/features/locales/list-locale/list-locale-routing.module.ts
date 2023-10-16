import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLocalePage } from './list-locale.page';

const routes: Routes = [
  {
    path: '',
    component: ListLocalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLocalePageRoutingModule {}
