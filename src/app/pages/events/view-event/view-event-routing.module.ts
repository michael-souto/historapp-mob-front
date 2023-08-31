import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEventPage } from './view-event.page';

const routes: Routes = [
  {
    path: ':id',
    component: ViewEventPage
  },
  {
    path: ':id/start-of-period',
    loadChildren: () => import('./start-of-period-event/start-of-period-event.module').then( m => m.StartOfPeriodEventPageModule)
  },
  {
    path: ':id/end-of-period',
    loadChildren: () => import('./end-of-period-event/end-of-period-event.module').then( m => m.EndOfPeriodEventPageModule)
  },
  {
    path: ':id/characters',
    loadChildren: () => import('./characters-event/characters-event.module').then( m => m.CharactersEventPageModule)
  },
  {
    path: ':id/locales',
    loadChildren: () => import('./locales-event/locales-event.module').then( m => m.LocalesEventPageModule)
  },
  {
    path: ':id/annotations',
    loadChildren: () => import('./annotations-event/annotations-event.module').then( m => m.AnnotationsEventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEventPageRoutingModule {}
