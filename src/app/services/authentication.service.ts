import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { CredentialDetails, Credentials } from 'crypto';
import { UserCredentials } from './credentials.interface';

const TOKEN_KEY ='auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


authenticationState = new BehaviorSubject(false);
  user: firebase.UserInfo;

  constructor(private afAuth: AngularFireAuth) {
  }


  signInWithEmail(userCredentials:UserCredentials): Promise<firebase.auth.UserCredential> {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(userCredentials.email,
			 userCredentials.password);
	}
}
