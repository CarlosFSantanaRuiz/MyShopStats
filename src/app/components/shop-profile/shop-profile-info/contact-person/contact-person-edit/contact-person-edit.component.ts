import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-person-edit',
  templateUrl: './contact-person-edit.component.html',
  styleUrls: ['./contact-person-edit.component.css']
})
export class ContactPersonEditComponent implements OnInit {
  @Input() shop: Object;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.notify.emit('');
  }
}
