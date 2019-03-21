import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { ShopService } from "../../../services/shop.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  getShopName = "";
  private shopRoles = [];
  constructor(
    private authService: AuthService,
    private shopService: ShopService
    ) { }

  ngOnInit() {
    this.shopService.getShopList().subscribe(data => {
      if(!data.shop_list){
        this.getShopName = "No Shops Found"
      }
      else {
      data.shop_list.forEach(element => {
        this.shopRoles.push(element);
      });    
    };
    });
  
  }

  logOut(){
    this.authService.logout()
  }

}
