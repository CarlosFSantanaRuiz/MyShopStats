import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from "../components/common/models/user";
import { Router } from "@angular/router";

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
  return this.http.post('http://localhost:3000/users/register', user, {headers: header})
    .pipe(map(res => res))
  }


  authenticateUser(user){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<User>('http://localhost:3000/users/authenticate', user, {headers: header})
      .pipe(map(res => res))
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
