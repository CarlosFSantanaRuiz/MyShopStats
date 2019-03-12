import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-profile-info',
  templateUrl: './shop-profile-info.component.html',
  styleUrls: ['./shop-profile-info.component.css']
})
export class ShopProfileInfoComponent implements OnInit {
  openModal: string = '';
  shopdata = {
    shopName: "Bill's Auto Shop",
    address: {
      street: "555 Street",
      city: "City",
      state: "UT",
      zip: 84065
    },
    laborRate: 30,
    totalhrs: 120,
    salesTax: 0.07,
    contact: {
      firstName: "Tyler",
      lastName: "Whipple",
      phoneNumber: "8015556481",
      email: "tylerwhipple@fake.com"
    }
    }
  
  weeklySchedules = [
    {
      day: 'Monday',
      schedule: {
        start: 900,
        end: 1700
      }
    },
    {
      day: 'Tuesday',
      schedule: {
        start: 900,
        end: 1700
      }
    },
    {
      day: 'Wednesday',
      schedule: {
        start: 900,
        end: 1700
      }
    },
    {
      day: 'Thursday',
      schedule: {
        start: 900,
        end: 1700
      }
    },
    {
      day: 'Friday',
      schedule: {
        start: 900,
        end: 1700
      }
    },
    {
      day: 'Saturday',
      schedule: {
        start: 0,
        end: 0
      }
    },
    {
      day: 'Sunday',
      schedule: {
        start: 0,
        end: 0
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  toggle(contentname) {
    this.openModal = contentname;
  }

  onNotify(message:string):void {
    this.openModal = '';
  }
}
