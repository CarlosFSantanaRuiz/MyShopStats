import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registeration-page',
  templateUrl: './registeration-page.component.html',
  styleUrls: ['./registeration-page.component.css']
})
export class RegisterationPageComponent implements OnInit {
  success: Boolean;
  header: String;
  msg: String = '';
  
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  role: String = "owner";

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      role: this.role
    }
    console.log(user);
    if(!this.validateService.validateRegister(user)){
      console.log("Please Fill in all fields");
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log('Please use a valid email');
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data){
          this.router.navigate(['/login']);
      }else {
        console.log('/register')
      }
    });
  }

  //Required fields

}
