import { inject, Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { defer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }

  loginWithCredentials(username: string, password: string): Observable<any> {
    const res = () => signInWithEmailAndPassword(this.auth, username, password);

    return defer(res);
  }
}
