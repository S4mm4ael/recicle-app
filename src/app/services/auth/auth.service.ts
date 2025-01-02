import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/User';

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

  login(email: string, password: string): Observable<void> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (email === 'error@email.com') {
          observer.error('Invalid email');
          observer.next();
        } else {
          const user = new User(1, email, password, 'John', 'Doe');
          observer.next();
          observer.complete();
        }
      }, 2000);
    });
  }
}
