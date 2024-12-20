import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() form!: AbstractControl | null;
  @Input() error!: string;
  @Input() message!: string;

  constructor() {}
  ngOnInit(): void {}

  shouldShow() {
    if (this.form?.touched && this.form.errors?.[this.error]) {
      return true;
    }
    return false;
  }
}
