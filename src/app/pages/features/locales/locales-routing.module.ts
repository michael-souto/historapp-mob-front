import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: "list", pathMatch: "full"
  },
  {
    path: 'list',
    loadChildren: () => import('./list-locale/list-locale.module').then( m => m.ListLocalePageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./edit-locale/edit-locale.module').then( m => m.EditLocalePageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./view-locale/view-locale.module').then( m => m.ViewLocalePageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./edit-locale/edit-locale.module').then( m => m.EditLocalePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalesPageRoutingModule {}
