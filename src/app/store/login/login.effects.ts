import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { recoverPassword, recoverPasswordSuccess } from './login.actions';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  recoverPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recoverPassword),
      switchMap(() =>
        this.authService
          .recoverEmailPassword('email@email.com')
          .pipe(map(() => recoverPasswordSuccess()))
      )
    )
  );
}
