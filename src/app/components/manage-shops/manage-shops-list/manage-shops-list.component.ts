import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-shops-list',
  templateUrl: './manage-shops-list.component.html',
  styleUrls: ['./manage-shops-list.component.css']
})
export class ManageShopsListComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  rowActive=false;
  rowsActive = [];
  shops = [{
    shopId: 12385364,
    name: "Bill's Shop",
    location: "555 Place Way, Easy City, UT 84065",
    technicians: [
      {
        technicianId: 123423,
        firstName: "Tyler",
        lastName: "Whipple"
      }
    ]
  },{
    shopId: 12385234364,
    name: "Bill's Second Shop",
    location: "555 State Street, Other City, UT 84065",
    technicians: [
      {
        technicianId: 234234,
        firstName: "Carlos",
        lastName: "Santana"
      }
    ]
  },
]

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(index) {
    var i = this.rowsActive.indexOf(index);
    if (i > -1) {
      this.rowsActive.splice(i, 1);
    } else {
      this.rowsActive.push(index);
    }
  }

  toggleModal(value) {
    this.notify.emit(value);
  }
}
