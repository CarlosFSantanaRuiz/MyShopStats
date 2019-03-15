import { Injectable, OnInit } from '@angular/core';
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

    loadToken(){
        const token = localStorage.get('id_token');
        this.authToken = token;
    }

    getProfile(){
        this.loadToken();
        const header = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.authToken
        });
        return this.http.get<Profile>('http://localhost:3000/users/profile', {headers: header})
          .pipe(map(res => res));
      }


      
};