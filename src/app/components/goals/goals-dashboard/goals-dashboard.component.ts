import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-dashboard',
  templateUrl: './goals-dashboard.component.html',
  styleUrls: ['./goals-dashboard.component.css']
})
export class GoalsDashboardComponent implements OnInit {
  currentdt;
  goalnotification = false;
  constructor() { }

  ngOnInit() {
  }

  
  getCurrentTime() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    
    var currentdt = mm + '/' + dd + '/' + yyyy + ' ' + hours + ':' + minutes;
    this.currentdt = currentdt;
  }
  saveGoals() {
    this.getCurrentTime();
    this.goalnotification = true;
}
}
