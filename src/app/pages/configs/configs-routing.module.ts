import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigsPage } from './configs.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigsPage
  },
  {
    path: 'calendars',
    loadChildren: () => import('./calendars/calendars.module').then( m => m.CalendarsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigsPageRoutingModule {}
