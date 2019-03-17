import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from "../components/common/models/user";
import { Router } from "@angular/router";
import { Profile } from '../components/common/models/profile';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;


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
}
