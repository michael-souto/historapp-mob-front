import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCharacterPage } from './list-character.page';

const routes: Routes = [
  {
    path: '',
    component: ListCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCharacterPageRoutingModule {}
