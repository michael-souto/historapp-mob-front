import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCharacterEventPage } from './search-character-event.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCharacterEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCharacterEventPageRoutingModule {}
