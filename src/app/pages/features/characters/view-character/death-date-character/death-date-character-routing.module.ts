import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathDateCharacterPage } from './death-date-character.page';

const routes: Routes = [
  {
    path: '',
    component: DeathDateCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathDateCharacterPageRoutingModule {}
