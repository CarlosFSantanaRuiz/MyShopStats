import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css']
})
export class ShopDashboardComponent implements OnInit {
  gaugedata = {
    presentableActual: 28,
    degree: 135,
    actualVsGoalDif: 120,   
    actual: 60,
    goal: 100
  }
  productivitydata = {
    type: "Productivity",
    presentableActual: 28,
    degree: 80,
    actualVsGoalDif: 120,   
    actual: 35,
    goal: 100
  }
  
  constructor() { }

  ngOnInit() {
  }

}
