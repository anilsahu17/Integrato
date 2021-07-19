import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from './_services';
import { User } from './_models';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser: User;

  constructor(
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {

    $.getScript('assets/js/main.js');

    /*if( localStorage.getItem("currentUser") === null ){

    }else{

    }*/

  }

}
