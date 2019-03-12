import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {
  @Input() shop: Object;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  toggle(contentname) {
    this.notify.emit(contentname);
  }

}
