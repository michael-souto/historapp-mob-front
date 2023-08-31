import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMotherCharacterPage } from './search-mother-character.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMotherCharacterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMotherCharacterPageRoutingModule {}
