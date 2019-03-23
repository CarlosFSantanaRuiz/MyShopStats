import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user, confirmpassword){
    if(
      [undefined, ""].includes(user.firstName) ||
      [undefined, ""].includes(user.lastName) ||
      [undefined, ""].includes(user.email) ||
      [undefined, ""].includes(user.password) ||
      [undefined, ""].includes(confirmpassword) 
    ){
      return false
    } else {
      return true
    }
  }

validateEmail(email){
    //Regular expression for email validation
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
  }

validatePasswordMatch(password, confirmpassword){
    if(password == confirmpassword) {
      return true;
    } else {
      return false;
    }
  }

  validatePasswordCriteria(password){
    if(password.length > 7 && password.length < 21) {
      return true;
    } else {
      return false;
    }
  } 
};