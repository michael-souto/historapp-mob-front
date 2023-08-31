import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersAnnotationPage } from './characters-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersAnnotationPage
  },
  {
    path: 'search-character',
    loadChildren: () => import('./search-character-annotation/search-character-annotation.module').then( m => m.SearchCharacterAnnotationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersAnnotationPageRoutingModule {}
