import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password): boolean {
    // console.log('before ' + this.isUserLoggedIn());
    if (username ===  'todo2020' && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn(): boolean {
    let user: string = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  logout(): void {
    sessionStorage.removeItem('authenticaterUser');
  }
}

