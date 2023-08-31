import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: "list", pathMatch: "full"
  },
  {
    path: 'list',
    loadChildren: () => import('./list-calendar/list-calendar.module').then( m => m.ListCalendarPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view-calendar/view-calendar.module').then( m => m.ViewCalendarPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./edit-calendar/edit-calendar.module').then( m => m.EditCalendarPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit-calendar/edit-calendar.module').then( m => m.EditCalendarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarsPageRoutingModule {}
