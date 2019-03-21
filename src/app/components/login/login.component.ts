import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: Boolean;
  header: String = "There Is a Log In Issue";
  msg: String = '';
  
  email: String;
  password: String;
  
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['user/12345/shop-dashboard'])
      }else {
        this.success = data.success;
        this.msg = data.msg;
        this.router.navigate(['/login'])
      }
    });
    
  }
}
