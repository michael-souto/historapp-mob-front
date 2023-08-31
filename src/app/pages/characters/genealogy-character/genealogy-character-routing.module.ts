import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenealogyCharacterPage } from './genealogy-character.page';

const routes: Routes = [
  {
    path: '',
    component: GenealogyCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenealogyCharacterPageRoutingModule {}
