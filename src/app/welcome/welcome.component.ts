import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome messages';
  welcomeMessageFromService: string;
  name = '';
  //ActivatedRoute:
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name']; //'name' is from app-routing path: 'welcome/:name', component: WelcomeComponent
  }
  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error),
    );
    // console.log('last line of getWelcomeMessage ');
  }
  getWelcomeMessageWithPathVariable() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error),
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}



