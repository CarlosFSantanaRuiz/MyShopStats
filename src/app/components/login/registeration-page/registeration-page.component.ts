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
  success: Boolean = false;
  header: String = 'There Were Registration Issues';
  msg: String = '';
  
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  confirmpassword: String;
  role: String = "owner";

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  validateData(user) {
    if(!this.validateService.validateRegister(user, this.confirmpassword)){
      this.msg = "Please Fill in all fields";
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.msg = "Please use a valid email";
      return false;
    }

    if(!this.validateService.validatePasswordCriteria(user.password)){
      this.msg = "Passwords should be between 6 and 20 characters";
      return false;
    }

    if(!this.validateService.validatePasswordMatch(user.password, this.confirmpassword)){
      this.msg = "Passwords should match";
      return false;
    }

  }

  onRegisterSubmit(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      role: this.role
    }

    if(this.validateData(user) == false) {
      return false;
    };

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
