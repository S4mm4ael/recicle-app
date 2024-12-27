import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  recoverEmailPassword(email: string): Observable<void> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (email == 'error@email.com') {
          observer.error('Invalid email');
        }
        observer.next();
        observer.complete();
      }, 2000);
    });
  }
}
