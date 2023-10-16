import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewAnnotationPage } from './preview-annotation.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewAnnotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewAnnotationPageRoutingModule {}
