import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/User';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { RegisterStateType } from 'src/app/model/user/UserRegister';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  register(userRegister: RegisterStateType): Observable<void> {
    return new Observable((observer) => {
      // Simulate registration logic
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 1000);
    });
  }

  recoverEmailPassword(email: string): Observable<void> {
    return new Observable((observer) => {
      sendPasswordResetEmail(this.auth, email)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  login(email: string, password: string): Observable<{ user: User }> {
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
