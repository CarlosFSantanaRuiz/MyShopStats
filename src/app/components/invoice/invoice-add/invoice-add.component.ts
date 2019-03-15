import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter;
  shoplist = {
    advisors: [
      { firstName:"Bob", lastName:"Ford" },
      { firstName:"Clarence", lastName:"Ford"  },
      { firstName:"Tobias", lastName:"Ford"  }
    ],
    technicians: [
      { firstName:"John", lastName:"Ford" },
      { firstName:"Thomas", lastName:"Ford"  },
      { firstName:"Elliott", lastName:"Ford"  }
    ],
    paymentOptions: [
      { paymentOption:"Credit Card"},
      { paymentOption:"Cash" },
      { paymentOption:"Loan" }
    ]
   }
  
    invoice = {
      isTaxExempt: false,
      hasCheckSheet: false,
      isComeBack: false,
      labor: 0,
      parts: 0,
      total: 0
    }
  
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.notify.emit('');
  }

  HandleCheckSheetException() {
    this.invoice.hasCheckSheet = !this.invoice.hasCheckSheet;
  }
  HandleComebackException() {
    this.invoice.isComeBack = !this.invoice.isComeBack;
  }
  HandleTaxExemptException() {
    this.invoice.isTaxExempt = !this.invoice.isTaxExempt;
  }
  addTotal(value){
    this.invoice.total = this.invoice.labor + this.invoice.parts;
  }

}
