import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { AuthService } from 'src/app/services/auth.service';
import { GenerateDataService } from 'src/app/services/generate-data.service';

@Component({
  selector: 'app-manage-shops-add',
  templateUrl: './manage-shops-add.component.html',
  styleUrls: ['./manage-shops-add.component.css']
})
export class ManageShopsAddComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  shopInfo = {
    shopName: null,
    laborRate: null,
    salesTax: null,
    shopAddress: null,
    shopCity: null,
    shopState: null,
    shopZip: null
  };
  weeklySchedules = this.GenerateDataService.getDefaultWeeklySchedule();
  addShopActive = 1;
  addShopAlreadyActive = [];

  constructor(
    private AuthService: AuthService,
    private GenerateDataService : GenerateDataService,
    private ShopService: ShopService
  ) { }

  ngOnInit() {
  }

  makeShopActive(activeShop) {
    this.addShopActive = activeShop;
    if (!(this.addShopAlreadyActive.includes(activeShop))) {
        this.addShopAlreadyActive.push(activeShop);
    }
  }

  closeModal() {
    this.notify.emit('');
  }

  onShopSubmit() {
    const shop =  {
      user: {
        userId: "5ca01a072e93874925b764b7",
        role: "owner"
      }, 
      shop: {
        shopName: this.shopInfo.shopName,
        shopAddress: this.shopInfo.shopAddress,
        shopCity: this.shopInfo.shopCity,
        shopState: this.shopInfo.shopState,
        shopZip: this.shopInfo.shopZip,
        shopRate: this.shopInfo.laborRate,
        shopTax: this.shopInfo.salesTax,
        hoursOfOp: {}
      }
    }

    for (var i = 0; i < this.weeklySchedules.length; i++ ) {
      var day = this.weeklySchedules[i].day
      var schedule = this.weeklySchedules[i].schedule
      shop.shop["hoursOfOp"][day] = schedule;
    }

    this.ShopService.addShop(shop).subscribe(data => {
      this.closeModal();
    });
  }

}
