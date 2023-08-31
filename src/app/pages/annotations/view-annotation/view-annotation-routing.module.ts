import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnnotationPage } from './view-annotation.page';

const routes: Routes = [
  {
    path: ':id',
    component: ViewAnnotationPage
  },
  {
    path: ':id/characters',
    loadChildren: () => import('./characters-annotation/characters-annotation.module').then( m => m.CharactersAnnotationPageModule)
  },
  {
    path: ':id/locales',
    loadChildren: () => import('./locales-annotation/locales-annotation.module').then( m => m.LocalesAnnotationPageModule)
  },
  {
    path: ':id/events',
    loadChildren: () => import('./events-annotation/events-annotation.module').then( m => m.EventsAnnotationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnnotationPageRoutingModule {}
