import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalesEventPage } from './locales-event.page';

const routes: Routes = [
  {
    path: '',
    component: LocalesEventPage
  },
  {
    path: 'search-locale',
    loadChildren: () => import('./search-locale-event/search-locale-event.module').then( m => m.SearchLocaleEventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalesEventPageRoutingModule {}
