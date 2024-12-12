import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickUpCallPage } from './pick-up-call.page';

const routes: Routes = [
  {
    path: '',
    component: PickUpCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickUpCallPageRoutingModule {}
