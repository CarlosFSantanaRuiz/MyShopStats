import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-profile-technicians',
  templateUrl: './shop-profile-technicians.component.html',
  styleUrls: ['./shop-profile-technicians.component.css']
})
export class ShopProfileTechniciansComponent implements OnInit {
  
  openModal:string = '';
  technicians = [{
    firstName: "Tyler",
    lastName: "Whipple",
    role: "advisor"
  },
  {
    firstName: "Carlos",
    lastName: "Santa Ruiz",
    role: "advisor"
  }]

  activetechnician = {
    firstName: "Carlos",
    lastName: "Santa Ruiz",
    role: "advisor"
  }

  constructor() { }

  ngOnInit() {
  }

  toggleModal(contentname) {
    this.openModal = contentname;
  }
}
