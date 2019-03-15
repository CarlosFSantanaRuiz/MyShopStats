import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter;
  
  invoice = [{
    invoiceNumber: 12385364,
    technician: 'Tyler Whipple',
    advisor: 'Carlos Santana Ruiz',
    isTaxExempt: false,
    hasCheckSheet: false,
    isComeBack: false,
    total: 23.50
  },
  {
    invoiceNumber: 2566467,
    technician: 'Bob Thomas',
    advisor: 'John Smith',
    isTaxExempt: true,
    hasCheckSheet: true,
    isComeBack: true,
    total: 95.70
  }
]
  
  constructor() { }

  ngOnInit() {
  }

  toggleModal(contentname) {
    this.notify.emit(contentname);
  }
}
