import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }


  registerUser(user){
  let header = new HttpHeaders();
  header.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/users/register', user, {headers: header})
    .pipe(map(res => res))
  }


  authenticateUser(user){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: header})
      .pipe(map(res => res))
  }
}
