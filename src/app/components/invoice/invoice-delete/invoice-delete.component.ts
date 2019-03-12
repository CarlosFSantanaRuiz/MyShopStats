import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-invoice-delete',
  templateUrl: './invoice-delete.component.html',
  styleUrls: ['./invoice-delete.component.css']
})
export class InvoiceDeleteComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.notify.emit('');    
  }

}
