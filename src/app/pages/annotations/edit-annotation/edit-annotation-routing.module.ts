import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAnnotationPage } from './edit-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: EditAnnotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAnnotationPageRoutingModule {}
