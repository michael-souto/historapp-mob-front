import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLocalePage } from './edit-locale.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditLocalePage
  },
  {
    path: '',
    component: EditLocalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLocalePageRoutingModule {}
