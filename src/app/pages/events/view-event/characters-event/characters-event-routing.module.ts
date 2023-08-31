import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersEventPage } from './characters-event.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersEventPage
  },
  {
    path: 'search-character',
    loadChildren: () => import('./search-character-event/search-character-event.module').then( m => m.SearchCharacterEventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersEventPageRoutingModule {}
