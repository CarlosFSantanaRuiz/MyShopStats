import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  toggleModal(contentname) {
    this.notify.emit(contentname);
  }
}
