import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickUpCallsPage } from './pick-up-calls.page';

const routes: Routes = [
  {
    path: '',
    component: PickUpCallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickUpCallsPageRoutingModule {}
