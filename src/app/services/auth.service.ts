import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from "../components/common/models/user";
import { Router } from "@angular/router";
import { Profile } from '../components/common/models/profile';
import { tokenNotExpired } from 'angular2-jwt';
import { Message } from "../components/common/models/messages";
import { ResetToken } from "../components/common/models/resetToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  message: Message;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }


  registerUser(user){
  let header = new HttpHeaders();
  header.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/user/register', user, {headers: header})
    .pipe(map(res => res))
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }


  authenticateUser(user){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<User>('http://localhost:3000/user/login', user, {headers: header})
      .pipe(map(res => res))
  }

  getProfile(){
 
    this.loadToken();
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get<Profile>('http://localhost:3000/user/profile', {headers: header})
      .pipe(map(res => res));
  }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  // RESET PASSWORD

  onForgotRequest(email){
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Message>('http://localhost:3000/user/forgot', {email: email}, {headers: header})
      .pipe(map(res => res));
  };

  onResetTokenRequest(token){
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<ResetToken>('http://localhost:3000/user/reset/'+ token, {headers: header})
      .pipe(map(res => res));
  };

  onResetPassword(password,confirm,token){
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const resetRequest = {password: password, confirm: confirm, token: token}
    return this.http.post<Message>('http://localhost:3000/user/reset/' + token, resetRequest, {headers: header})
      .pipe(map(res => res));
  };

  // END: RESET PASSWORD

}
