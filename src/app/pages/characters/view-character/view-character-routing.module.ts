import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCharacterPage } from './view-character.page';

const routes: Routes = [
  {
    path: ':id',
    component: ViewCharacterPage
  },
  {
    path: ':id/birth-date',
    loadChildren: () => import('./birth-date-character/birth-date-character.module').then( m => m.BirthDateCharacterPageModule)
  },
  {
    path: ':id/death-date',
    loadChildren: () => import('./death-date-character/death-date-character.module').then( m => m.DeathDateCharacterPageModule)
  },
  {
    path: ':id/mother',
    loadChildren: () => import('./search-mother-character/search-mother-character.module').then( m => m.SearchMotherCharacterPageModule)
  },
  {
    path: ':id/father',
    loadChildren: () => import('./search-father-character/search-father-character.module').then( m => m.SearchFatherCharacterPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCharacterPageRoutingModule {}
