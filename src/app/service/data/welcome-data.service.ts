import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http: HttpClient,
  ) { }

  executeHelloWorldService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service");
  }
  executeHelloWorldServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      // {headers}
      );
  }
  // http://localhost:8080/hello-world/path-variable/abc

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'todo2020';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = "Basic " + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}

'http://localhost:8080/hello-world/path-variable/todo2020'
