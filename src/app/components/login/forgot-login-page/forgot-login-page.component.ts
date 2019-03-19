import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-login-page',
  templateUrl: './forgot-login-page.component.html',
  styleUrls: ['./forgot-login-page.component.css']
})
export class ForgotLoginPageComponent implements OnInit {
  email: String = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.onForgotRequest(this.email).subscribe(data => {
        if(data.success == true){
          this.router.navigate(['login'])
        }
    });
  };

}
