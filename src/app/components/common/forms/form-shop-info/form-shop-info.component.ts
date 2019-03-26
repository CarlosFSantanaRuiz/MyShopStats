import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-shop-info',
  templateUrl: './form-shop-info.component.html',
  styleUrls: ['./form-shop-info.component.css']
})
export class FormShopInfoComponent implements OnInit {
  shopName;
  laborRate;
  salesTax;

  constructor() { }

  ngOnInit() {
  }

}
