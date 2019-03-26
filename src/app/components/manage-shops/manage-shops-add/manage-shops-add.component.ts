import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-shops-add',
  templateUrl: './manage-shops-add.component.html',
  styleUrls: ['./manage-shops-add.component.css']
})
export class ManageShopsAddComponent implements OnInit {
  addShopActive = 1;

  constructor() { }

  ngOnInit() {
  }

  makeShopActive(activeShop) {
    this.addShopActive = activeShop;
  }

}
