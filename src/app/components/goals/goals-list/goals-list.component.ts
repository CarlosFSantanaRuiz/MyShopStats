import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {
  goalsIsActive = 999;
  
  shop = {
    shopname: "Bill's Auto Shop",
    monthlyRevenue: 5000, 
    totalDaysWork: 20,
    productivity: 100,
    avgro: 50,
    technicians: [{
      firstName: 'Tyler',
      lastName: 'Whipple',
      role: 'Technician',
      goal: {
        avgro: 50,
        productivity: 35,
        monthlyRevenue: 1000,
        totalDaysWork: 20
      }
    },{
      firstName: 'Carlos',
      lastName: 'Ruiz',
      role: 'Manager',
      goal: {
        avgro: 70,
        productivity: 50,
        monthlyRevenue: 2000,
        totalDaysWork: 20
      }
    }]
  }


  constructor() { }

  ngOnInit() {
  }

  
  setSelected(goalsIsActive) {
      this.goalsIsActive = goalsIsActive;
      console.log(this.goalsIsActive);
  };

  addTotal(value){
    this.shop.monthlyRevenue = value;
  }

}
