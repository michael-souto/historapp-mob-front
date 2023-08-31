import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthDateCharacterPage } from './birth-date-character.page';

const routes: Routes = [
  {
    path: '',
    component: BirthDateCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthDateCharacterPageRoutingModule {}
