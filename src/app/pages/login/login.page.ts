import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import {
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordSuccess,
} from 'src/app/store/login/login.actions';
import { show, hide } from 'src/app/store/loading/loading.actions';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/app/store/login/LoginState';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  private onIsRecoveringPassword(loginState: LoginState) {
    if (loginState.isRecoveringPassword) {
      this.store.dispatch(show());
      this.authService
        .recoverEmailPassword(this.form.get('email')?.value)
        .subscribe(
          () => {
            this.store.dispatch(recoverPasswordSuccess());
          },
          (error) => {
            this.store.dispatch(recoverPasswordFail(error));
          }
        );
    }
  }

  private async onIsRecoveredPassword(loginState: LoginState) {
    if (!loginState.isRecoveredPassword) {
      this.store.dispatch(hide());
      const toaster = await this.toastController.create({
        message: 'Recovery email sent',
        duration: 2000,
        color: 'primary',
      });
      toaster.present();
      this.store.dispatch(recoverPasswordSuccess());
    }
  }

  forgotEmailPassword() {
    this.store.select('login').subscribe((loginState) => {
      this.onIsRecoveringPassword(loginState);
      this.onIsRecoveredPassword(loginState);
    });
  }

  login() {
    this.router.navigate(['home']);
  }

  register() {
    this.router.navigate(['register']);
  }
}
