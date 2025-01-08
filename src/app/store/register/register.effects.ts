import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import { of } from 'rxjs';
import { RegisterStateType } from '../../model/user/UserRegister';
import { register, registerSuccess, registerFailure } from './register.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap((payload: { userRegister: RegisterStateType }) =>
        this.authService.register(payload.userRegister).pipe(
          map(() => registerSuccess()),
          catchError((error) => of(registerFailure(error)))
        )
      )
    )
  );
}
