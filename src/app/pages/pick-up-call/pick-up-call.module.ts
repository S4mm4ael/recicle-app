import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickUpCallPageRoutingModule } from './pick-up-call-routing.module';

import { PickUpCallPage } from './pick-up-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickUpCallPageRoutingModule
  ],
  declarations: [PickUpCallPage]
})
export class PickUpCallPageModule {}
