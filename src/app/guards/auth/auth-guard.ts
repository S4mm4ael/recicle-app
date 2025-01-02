import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable, of, take, switchMap } from 'rxjs';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store<AppState>, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.store.select('login').pipe(
      take(1),
      switchMap((loginState) => {
        if (loginState.isLoggedIn) {
          return of(true);
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      })
    );
  }
}
