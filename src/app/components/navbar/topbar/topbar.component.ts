import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { ShopService } from "../../../services/shop.service";
import { ShopRoles } from '../../common/models/shop_roles';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  getShopName = "Bill's Auto Shop";
  shopList: ShopRoles;
  constructor(
    private authService: AuthService,
    private router: Router,
    private shopService: ShopService
    ) { }

  ngOnInit() {
    this.shopService.getShopList().subscribe(data => {
      this.shopList = data
      console.log(this.shopList);
      
    });
  }

  logOut(){
    this.authService.logout()
  }

}
