import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from "@angular/router";
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-forgot-login-page',
  templateUrl: './forgot-login-page.component.html',
  styleUrls: ['./forgot-login-page.component.css']
})
export class ForgotLoginPageComponent implements OnInit {
  success: Boolean;
  header: String;
  msg: String = '';

  email: String = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.onForgotRequest(this.email).subscribe(data => {
      this.success = data.success;
      this.msg = data.msg;
        if(data.success == true){
          this.header = "You're Ready For A Reset"
        }else {
          this.header = "There Is a Log In Issue"
        }
    });
  };

}
