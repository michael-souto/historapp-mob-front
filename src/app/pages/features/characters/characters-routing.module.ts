import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list-character/list-character.module').then( m => m.ListCharacterPageModule)
  },
  {
    path: 'genealogy',
    loadChildren: () => import('./genealogy-character/genealogy-character.module').then( m => m.GenealogyCharacterPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./edit-character/edit-character.module').then( m => m.EditCharacterPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./view-character/view-character.module').then( m => m.ViewCharacterPageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./edit-character/edit-character.module').then( m => m.EditCharacterPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
