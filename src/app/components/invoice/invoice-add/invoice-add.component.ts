import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.notify.emit('');
  }

}
