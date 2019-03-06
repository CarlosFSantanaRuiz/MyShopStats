import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-profile-dashboard',
  templateUrl: './shop-profile-dashboard.component.html',
  styleUrls: ['./shop-profile-dashboard.component.css']
})
export class ShopProfileDashboardComponent implements OnInit {
  public activeProfile:string = 'shop-profile';
  isActive = false;

  toggle(toggle) {
    this.activeProfile = toggle;
    this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit() {
  }

}
