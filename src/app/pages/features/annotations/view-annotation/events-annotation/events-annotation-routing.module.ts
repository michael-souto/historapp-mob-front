import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsAnnotationPage } from './events-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: EventsAnnotationPage
  },
  {
    path: 'search-event',
    loadChildren: () => import('./search-event-annotation/search-event-annotation.module').then( m => m.SearchEventAnnotationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsAnnotationPageRoutingModule {}
