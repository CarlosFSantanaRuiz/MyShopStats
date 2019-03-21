import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { ShopService } from "../../../services/shop.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  getShopName = "Bill's Auto Shop";
  private shopRoles = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private shopService: ShopService
    ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
    this.shopService.getShopList().subscribe(data => {
      data.shop_list.forEach(element => {
        this.shopRoles.push(element);
      });    
    });
  } 
  
    
  }

  logOut(){
    this.authService.logout()
  }

}
