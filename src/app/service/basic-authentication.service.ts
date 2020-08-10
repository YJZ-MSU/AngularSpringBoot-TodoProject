import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.contants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username, password): boolean {
  //   // console.log('before ' + this.isUserLoggedIn());
  //   if (username ===  'todo2020' && password === 'dummy') {
  //     sessionStorage.setItem('authenticaterUser', username);
  //     // console.log('after ' + this.isUserLoggedIn());
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  executeJWTAuthenticationService(username, password) {
    return this.http.post<any>(`${API_URL}/authenticate`,
      {username, password}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }


  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = "Basic " + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn(): boolean {
    let user: string = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout(): void {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public message: string) {
  }
}

