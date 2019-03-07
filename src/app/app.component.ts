import { Component } from '@angular/core';

import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthorized: Boolean = false;
  constructor(
    private authService: AuthService
  ){

  }
  
  isLoggedIn(){
    this.isAuthorized = this.authService.loggedIn()
  }
}
