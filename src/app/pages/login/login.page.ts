import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import {
  loginSuccess,
  login,
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
  loginStateSubscription: any;

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

    this.loginStateSubscription = this.store
      .select('login')
      .subscribe((loginState) => {
        this.onIsRecoveredPassword(loginState);
        this.onIsRecoveringPassword(loginState);
        this.onIsRecoveredPasswordFail(loginState);

        this.onIsLoggingIn(loginState);
        this.onIsLoggedIn(loginState);

        this.toggleLoading(loginState);
      });
  }

  private toggleLoading(loginState: LoginState) {
    if (loginState.isLoggingIn || loginState.isRecoveringPassword) {
      this.store.dispatch(show());
    } else {
      this.store.dispatch(hide());
    }
  }

  private onIsLoggedIn(loginState: LoginState) {
    if (loginState.isLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  private onIsLoggingIn(loginState: LoginState) {
    if (loginState.isLoggingIn) {
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      const user = {
        id: 1,
        email,
        password,
        name: 'John',
        surname: 'Doe',
      };
      this.authService.login(email, password).subscribe(
        () => {
          this.store.dispatch(loginSuccess({ user }));
        },
        (error) => {
          this.store.dispatch(recoverPasswordFail(error));
        }
      );
    }
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

  private async onIsRecoveredPasswordFail(loginState: LoginState) {
    if (loginState.error) {
      this.store.dispatch(hide());
      const toaster = await this.toastController.create({
        message: loginState.error,
        duration: 2000,
        color: 'danger',
      });
      toaster.present();
      this.store.dispatch(recoverPasswordFail({ error: loginState.error }));
    }
  }

  forgotEmailPassword() {
    const email = this.form.get('email')?.value;
    this.store.dispatch(recoverPassword({ email }));
  }

  login() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    this.store.dispatch(login({ email, password }));
  }

  register() {
    this.router.navigate(['register']);
  }
}
