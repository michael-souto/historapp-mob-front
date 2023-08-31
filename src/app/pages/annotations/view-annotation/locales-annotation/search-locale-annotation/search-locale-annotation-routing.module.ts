import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchLocaleAnnotationPage } from './search-locale-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: SearchLocaleAnnotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchLocaleAnnotationPageRoutingModule {}
