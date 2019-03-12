import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-dashboard',
  templateUrl: './invoice-dashboard.component.html',
  styleUrls: ['./invoice-dashboard.component.css']
})
export class InvoiceDashboardComponent implements OnInit {
  openModal:string = '';
  constructor() { }

  ngOnInit() {
  }

  toggleModal(contentname) {
    this.openModal = contentname;
  }

}
