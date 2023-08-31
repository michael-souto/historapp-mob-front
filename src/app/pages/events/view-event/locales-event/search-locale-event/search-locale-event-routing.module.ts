import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchLocaleEventPage } from './search-locale-event.page';

const routes: Routes = [
  {
    path: '',
    component: SearchLocaleEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchLocaleEventPageRoutingModule {}
