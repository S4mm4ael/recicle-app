import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickUpCallsPageRoutingModule } from './pick-up-calls-routing.module';

import { PickUpCallsPage } from './pick-up-calls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickUpCallsPageRoutingModule
  ],
  declarations: [PickUpCallsPage]
})
export class PickUpCallsPageModule {}
