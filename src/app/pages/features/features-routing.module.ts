import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesPage } from './features.page';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FeaturesPage,
    children: [
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'characters',
        loadChildren: () =>
          import('./characters/characters.module').then(
            (m) => m.CharactersPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'configs',
        loadChildren: () =>
          import('./configs/configs.module').then((m) => m.ConfigsPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'locales',
        loadChildren: () =>
          import('./locales/locales.module').then((m) => m.LocalesPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'annotations',
        loadChildren: () =>
          import('./annotations/annotations.module').then(
            (m) => m.AnnotationsPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesPageRoutingModule {}
