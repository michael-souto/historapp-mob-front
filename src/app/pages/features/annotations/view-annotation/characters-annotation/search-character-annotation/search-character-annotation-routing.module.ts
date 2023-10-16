import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCharacterAnnotationPage } from './search-character-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCharacterAnnotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCharacterAnnotationPageRoutingModule {}
