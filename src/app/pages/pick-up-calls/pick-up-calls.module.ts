import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickUpCallsPageRoutingModule } from './pick-up-calls-routing.module';

import { PickUpCallsPage } from './pick-up-calls.page';
import { PickupCallCardModule } from 'src/app/components/pickup-call-card/pickup-call-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickUpCallsPageRoutingModule,
    PickupCallCardModule,
  ],
  declarations: [PickUpCallsPage],
})
export class PickUpCallsPageModule {}
