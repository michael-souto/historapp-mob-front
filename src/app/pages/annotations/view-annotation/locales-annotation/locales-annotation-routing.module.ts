import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalesAnnotationPage } from './locales-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: LocalesAnnotationPage
  },
  {
    path: 'search-locale',
    loadChildren: () => import('./search-locale-annotation/search-locale-annotation.module').then( m => m.SearchLocaleAnnotationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalesAnnotationPageRoutingModule {}
