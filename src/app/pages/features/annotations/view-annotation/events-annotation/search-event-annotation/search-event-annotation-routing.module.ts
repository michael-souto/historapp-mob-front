import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchEventAnnotationPage } from './search-event-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: SearchEventAnnotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchEventAnnotationPageRoutingModule {}
