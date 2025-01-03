import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ErrorMessageComponent],
  declarations: [ErrorMessageComponent],
})
export class ErrorMessageComponent {}
