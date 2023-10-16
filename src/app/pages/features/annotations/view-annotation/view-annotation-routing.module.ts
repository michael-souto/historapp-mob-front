import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnnotationPage } from './view-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAnnotationPage,
    children: [
      {
        path: '',
        redirectTo: 'preview',
        pathMatch: 'full',
      },
      {
        path: 'preview',
        loadChildren: () =>
          import('./preview-annotation/preview-annotation.module').then(
            (m) => m.PreviewAnnotationPageModule
          ),
      },
      {
        path: 'characters',
        loadChildren: () =>
          import('./characters-annotation/characters-annotation.module').then(
            (m) => m.CharactersAnnotationPageModule
          ),
      },
      {
        path: 'locales',
        loadChildren: () =>
          import('./locales-annotation/locales-annotation.module').then(
            (m) => m.LocalesAnnotationPageModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events-annotation/events-annotation.module').then(
            (m) => m.EventsAnnotationPageModule
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnnotationPageRoutingModule {}
