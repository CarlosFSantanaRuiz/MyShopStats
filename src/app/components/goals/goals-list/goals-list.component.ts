import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {

  shopname = "Bill's Auto Shop";
  technicians = [{
    firstName: 'Tyler',
    lastName: 'Whipple',
    role: 'Technician'
  },{
    firstName: 'Carlos',
    lastName: 'Ruiz',
    role: 'Manager'
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
