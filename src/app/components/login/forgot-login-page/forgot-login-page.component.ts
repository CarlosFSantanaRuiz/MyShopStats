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
  errorheader: String = 'There Appears To Be An Issue';
  errormsg: String = '';
  email: String = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.onForgotRequest(this.email).subscribe(data => {
        if(data.success == true){
          this.router.navigate(['login'])
        }else {
          this.errormsg = data.msg;
        }
    });
  };

}
