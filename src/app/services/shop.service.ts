import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from "rxjs/operators";
import { ShopRoles } from "../components/common/models/shop_roles";
import { Router } from "@angular/router";

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
        return this.http.get<ShopRoles>('http://localhost:3000/shop/shop-list', {headers: header})
          .pipe(map(res => res));
      }catch(err){
        throw err;
      }
  };

  addShop(shop){
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.post('http://localhost:3000/shop/shop-new', shop, {headers: header})
      .pipe(map(res => res))
    };
};