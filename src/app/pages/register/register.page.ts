import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterPageForm } from './form/register.page.form';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import { register } from 'src/app/store/register/register.actions';
import { RegisterStateType } from 'src/app/store/register/RegisterState';
import { hide, show } from 'src/app/store/loading/loading.actions';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  registerForm!: RegisterPageForm;
  registerStateSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.createForm();
    this.watchRegisterState();
  }

  ngOnDestroy() {
    this.registerStateSubscription.unsubscribe();
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
    this.registerStateSubscription = this.store
      .select('register')
      .subscribe((state) => {
        this.toggleLoading(state);

        this.onRegister(state);
        this.onError(state);
      });
  }

  private onRegister(state: RegisterStateType) {
    if (state.isRegistered) {
    }
  }

  private onError(state: RegisterStateType) {
    if (state.error) {
      this.toastController
        .create({
          message: state.error.error.message,
          duration: 3000,
          header: 'Registration Error',
        })
        .then((toast) => {
          toast.present();
        });
    }
  }

  private toggleLoading(state: RegisterStateType) {
    if (state.isRegistering) {
      this.store.dispatch(show());
    } else {
      this.store.dispatch(hide());
    }
  }
}
