import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import { register } from 'src/app/store/register/register.actions';
import { RegisterStateType } from 'src/app/store/register/RegisterState';
import { show } from 'src/app/store/loading/loading.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: RegisterPageForm;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.createForm();

    this.watchRegisterState();
  }

  register() {
    this.registerForm.getForm().markAllAsTouched();

    if (this.registerForm.getForm().valid) {
      this.store.dispatch(
        register({ userRegister: this.registerForm.getForm().value })
      );
    }
  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  private watchRegisterState() {
    this.store.select('register').subscribe((state) => {
      this.toggleLoading(state);
    });
  }

  private toggleLoading(state: RegisterStateType) {
    if (state.isRegistering) {
      this.store.dispatch(show());
    }
  }
}
