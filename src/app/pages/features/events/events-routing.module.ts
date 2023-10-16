import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list-event/list-event.module').then( m => m.ListEventPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./edit-event/edit-event.module').then( m => m.EditEventPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./view-event/view-event.module').then( m => m.ViewEventPageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./edit-event/edit-event.module').then( m => m.EditEventPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
