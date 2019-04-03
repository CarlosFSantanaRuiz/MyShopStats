import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { AuthService } from 'src/app/services/auth.service';

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
    salesTax: null
  };
  addShopActive = 1;

  constructor(
    private AuthService: AuthService,
    private ShopService: ShopService
  ) { }

  ngOnInit() {
  }

  makeShopActive(activeShop) {
    this.addShopActive = activeShop;
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
        shopAddress: "44234 This Street",
        shopCity: "Bluffdale",
        shopState: "UT",
        shopZip: "84065",
        shopRate: this.shopInfo.laborRate,
        shopTax: this.shopInfo.salesTax,
        hoursOfOp: {
          monday: {
            start: 32400000,
            end: 57600000
          },
          tuesday: {
            start: 32400000,
            end: 57600000
          },
          wednesday: {
            start: 32400000,
            end: 57600000
          },
          thursday: {
            start: 32400000,
            end: 57600000
          },
          friday: {
            start: 32400000,
            end: 57600000
          },
          saturday: {
            start: 0,
            end: 0
          },
          sunday: {
            start: 0,
            end: 0
          }
        }
      }
    }

    this.ShopService.addShop(shop).subscribe(data => {

    });
  }

}
