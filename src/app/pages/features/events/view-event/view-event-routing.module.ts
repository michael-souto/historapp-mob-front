import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEventPage } from './view-event.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEventPage,
    children: [
      {
        path: '',
        redirectTo: 'preview',
        pathMatch: 'full',
      },
      {
        path: 'preview',
        loadChildren: () =>
          import('./preview-event/preview-event.module').then(
            (m) => m.PreviewEventPageModule
          ),
      },
      {
        path: 'start-of-period',
        loadChildren: () =>
          import('./start-of-period-event/start-of-period-event.module').then(
            (m) => m.StartOfPeriodEventPageModule
          ),
      },
      {
        path: 'end-of-period',
        loadChildren: () =>
          import('./end-of-period-event/end-of-period-event.module').then(
            (m) => m.EndOfPeriodEventPageModule
          ),
      },
      {
        path: 'characters',
        loadChildren: () =>
          import('./characters-event/characters-event.module').then(
            (m) => m.CharactersEventPageModule
          ),
      },
      {
        path: 'locales',
        loadChildren: () =>
          import('./locales-event/locales-event.module').then(
            (m) => m.LocalesEventPageModule
          ),
      },
      {
        path: 'annotations',
        loadChildren: () =>
          import('./annotations-event/annotations-event.module').then(
            (m) => m.AnnotationsEventPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEventPageRoutingModule {}
