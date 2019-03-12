import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-dashboard',
  templateUrl: './tech-dashboard.component.html',
  styleUrls: ['./tech-dashboard.component.css']
})
export class TechDashboardComponent implements OnInit {
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
