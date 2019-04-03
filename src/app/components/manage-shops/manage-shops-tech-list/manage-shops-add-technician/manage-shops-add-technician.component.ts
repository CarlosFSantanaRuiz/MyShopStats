import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-shops-add-technician',
  templateUrl: './manage-shops-add-technician.component.html',
  styleUrls: ['./manage-shops-add-technician.component.css']
})
export class ManageShopsAddTechnicianComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.notify.emit('');
  }

}
