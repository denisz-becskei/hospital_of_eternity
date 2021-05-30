import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any = null;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    this.userData = null;
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.setUserData(result.user);
    } catch {
      /* DO NOTHING HERE */
    }
  }

  authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  currentUserObservable(): any {
    return this.afAuth.authState;
  }

  getCurrentUser(): any {
    return this.userData;
  }

  setUserData(user: any) {
    this.userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    }
  }

  updateCurrentUserName(name: string) {
    return this.afAuth.currentUser.then((user) => {
      return user?.updateProfile({
        displayName: name,
      });
    });
  }

  createUser(email: string, password: string, name?: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (name) {
          this.updateCurrentUserName(name);
        }
        return result.user;
      });
  }
}
