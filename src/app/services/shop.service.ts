import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from "rxjs/operators";
import { ShopRoles } from "../components/common/models/shop_roles";
import { Router } from "@angular/router";
import { Profile } from '../components/common/models/profile';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private authToken: any;
  private user: any;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

    loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    getShopList(){
      try{
        this.loadToken();
        const header = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.authToken
        });
        return this.http.get<ShopRoles>('http://localhost:3000/shops/shop-list', {headers: header})
          .pipe(map(res => res));
      }catch(err){
        throw err;
      }
  };
};