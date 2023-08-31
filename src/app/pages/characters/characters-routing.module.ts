import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: "list", pathMatch: "full"
  },
  {
    path: 'list',
    loadChildren: () => import('./list-character/list-character.module').then( m => m.ListCharacterPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./edit-character/edit-character.module').then( m => m.EditCharacterPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view-character/view-character.module').then( m => m.ViewCharacterPageModule)
  },
  {
    path: 'view/:id/edit',
    loadChildren: () => import('./edit-character/edit-character.module').then( m => m.EditCharacterPageModule)
  },
  {
    path: 'genealogy',
    loadChildren: () => import('./genealogy-character/genealogy-character.module').then( m => m.GenealogyCharacterPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
