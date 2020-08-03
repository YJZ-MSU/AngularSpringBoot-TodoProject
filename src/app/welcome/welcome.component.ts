import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome messages';
  name = '';
  //ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name']; //'name' is from app-routing path: 'welcome/:name', component: WelcomeComponent
  }

}



