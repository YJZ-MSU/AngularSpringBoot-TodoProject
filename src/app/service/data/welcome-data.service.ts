import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("Execute Hello World Bean Service");
  }
  // http://localhost:8080/hello-world/path-variable/abc
}
