import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list-annotation/list-annotation.module').then( m => m.ListAnnotationPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./edit-annotation/edit-annotation.module').then( m => m.EditAnnotationPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./view-annotation/view-annotation.module').then( m => m.ViewAnnotationPageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./edit-annotation/edit-annotation.module').then( m => m.EditAnnotationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnotationsPageRoutingModule {}
